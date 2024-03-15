import connectToDB from "./db";
import Jobpost from "@/models/Jobpost";

export const getJobs = async ({
  query,
  date,
  page,
  category,
  limit,
}: {
  query?: string;
  date?: string;
  category?: string;
  page: number;
  limit: number;
}) => {
  try {
    await connectToDB();

    const skip = (page - 1) * limit;

    const pipeline: PipelineStage[] = [];

    if (query) {
      pipeline.unshift({
        $search: {
          index: "jobs-search",
          text: {
            query,
            fuzzy: {
              maxEdits: 1,
              prefixLength: 3,
              maxExpansions: 50,
            },
            path: {
              wildcard: "*",
            },
          },
        },
      });
    }

    if (date) {
      const dateFilter = createDateFilter(date);
      pipeline.push(dateFilter);
    }

    if (category) {
      pipeline.push({
        $match: {
          jobCategory: category,
        },
      });
    }

    // Add $sort stage to sort by createdAt in descending order
    pipeline.push({ $sort: { createdAt: -1 } });

    pipeline.push({ $skip: skip }, { $limit: limit });

    // Count total number of documents in a separate pipeline
    const countPipeline: PipelineStage[] = [...pipeline];

    // Remove $skip and $limit stages from the count pipeline
    countPipeline.splice(
      countPipeline.findIndex((stage) => "$skip" in stage),
      2
    );

    countPipeline.push({ $count: "totalPosts" });

    await sleep(1000);
    const result = await Jobpost.aggregate(pipeline).exec();
    const [countResult] = await Jobpost.aggregate(countPipeline).exec();

    const totalPosts = countResult ? countResult.totalPosts : 0;

    return { jobs: result, totalPosts };
  } catch (error) {
    return { error };
  }
};

function createDateFilter(date: string): PipelineStage {
  const currentDate = new Date();

  switch (date) {
    case "24hrs":
      currentDate.setDate(currentDate.getDate() - 1);
      break;
    case "3days":
      currentDate.setDate(currentDate.getDate() - 3);
      break;
    case "7days":
      currentDate.setDate(currentDate.getDate() - 7);
      break;
    case "30days":
      currentDate.setDate(currentDate.getDate() - 30);
      break;
    case "Any":
      return {
        $match: {},
      };
    default:
      break;
  }

  return {
    $match: {
      createdAt: { $gte: currentDate },
    },
  };
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type PipelineStage =
  | {
      $search: {
        index: string;
        text: {
          query: string;
          fuzzy: {};
          path: {
            wildcard: string;
          };
        };
      };
    }
  | {
      $match: {
        [key: string]: any;
      };
    }
  | { $sort: { createdAt: any } }
  | {
      $skip: number;
    }
  | {
      $limit: number;
    }
  | { $count: any };

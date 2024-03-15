import { NextResponse } from "next/server";
import connectToDB from "@utils/db";
import Jobpost from "@models/Jobpost";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connectToDB();
    const post = await Jobpost.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connectToDB();
    await Jobpost.findByIdAndDelete(id);
    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { id } = params;
  const {
    jobTitle,
    location,
    companyName,
    jobType,
    jobDescription,
    applicationLink,
    image,
  } = await request.json();

  console.log({
    jobTitle,
    location,
    companyName,
    jobType,
    jobDescription,
    applicationLink,
    image,
  });

  try {
    await connectToDB();

    const existingJob = await Jobpost.findById(id);

    if (!existingJob) return new NextResponse("Job not found", { status: 404 });

    existingJob.jobTitle = jobTitle;
    existingJob.location = location;
    existingJob.companyName = companyName;
    existingJob.jobType = jobType;
    existingJob.jobDescription = jobDescription;
    existingJob.applicationLink = applicationLink;
    existingJob.image = image;

    await existingJob.save();
    return new NextResponse(JSON.stringify(existingJob), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to update the Job", { status: 500 });
  }
};

import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const jobPostSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    location: String,
    companyName: {
      type: String,
      required: true,
    },
    postedDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    applicationLink: String,
    jobDescription: {
      type: String,
      required: true,
    },
    image: String,
    jobType: {
      type: String,
      required: true,
    },
    jobCategory: String,
    deadline: String,
  },
  { timestamps: true }
);

const Jobpost = models.Jobpost || model("Jobpost", jobPostSchema);

export default Jobpost;

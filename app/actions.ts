"use server";
import connectToDB from "@utils/db";
import Jobpost from "@models/Jobpost";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
export async function jobAction(formData: FormData) {
  try {
    await connectToDB();
  } catch (error) {
    console.error("Connection failed:", error);
    throw new Error("Database connection failed!");
  }

  const jobTitle = formData.get("jobTitle");
  const location = formData.get("location");
  const companyName = formData.get("companyName");
  const jobDescription = formData.get("jobDescription");
  const applicationLink = formData.get("applicationLink");
  const image = formData.get("image");
  const jobType = formData.get("jobType");
  const jobCategory = formData.get("jobCategory");
  const deadline = formData.get("deadline");

  console.log({
    jobTitle,
    location,
    companyName,
    jobType,
    jobDescription,
    applicationLink,
    image,
    jobCategory,
    deadline,
  });

  const newJob = new Jobpost({
    jobTitle,
    location,
    companyName,
    jobType,
    jobDescription,
    applicationLink,
    image,
    jobCategory,
    deadline,
  });

  try {
    await newJob.save();
  } catch (error) {
    console.error("Can't save job", error);
    throw new Error("can't save job");
  }
}

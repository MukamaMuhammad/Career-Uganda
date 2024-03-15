import { NextResponse } from "next/server";
import connectToDB from "@utils/db";
import Jobpost from "@models/Jobpost";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");
  try {
    await connectToDB();
    const posts = await Jobpost.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

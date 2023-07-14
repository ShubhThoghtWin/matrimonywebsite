import { connect } from "@/dbConfig/dbconfig";
import userRegistration from "@/models/userRegistrationModel";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function POST(request: NextResponse) {
  try {
    const reqBody = await request.json();

    const registerUser = new userRegistration({
      reqBody,
    });

    const saveUserDetail = await registerUser.save();
    console.log(saveUserDetail);
    return NextResponse.json(
      {
        message: "User profile Data saved  successfully",
        success: true,
        saveUserDetail,
      },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      {
        status: 500,
      }
    );
  }
}

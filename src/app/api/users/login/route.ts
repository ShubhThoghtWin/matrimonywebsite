import { connect } from "@/dbConfig/dbconfig";
import User from "@/models/userModel";

import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();
export async function POST(request: NextResponse) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    //check if user exist

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does'nt exist" },
        { status: 400 }
      );
      // check for password
    }
    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
    }

    //create token data

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    // create token

    const token = await jwt.sign(tokenData, "nextmatrimonial", {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "login successfull",
      success: true,
      id: user._id,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
}

import BackupDB from "@/functions/connection/BackupDB";
import ConnectDB from "@/functions/connection/ConnectDB";
import users from "@/models/users";
import { compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const accessKey = process.env.CLIENT_ACCESS_KEY;
const refreshKey = process.env.CLIENT_REFRESH_KEY;

export const GET = async () => {
  try {
    await ConnectDB();
    await BackupDB();
    const recievedAccessToken = headers().get("authorization")?.split(" ")[1];

    const response = new NextResponse();

    // Token not found
    if (!recievedAccessToken) throw new Error("Token not found");

    // Validate the access token
    const valid = verify(recievedAccessToken, accessKey);

    // If valid
    if (valid) {
      const { _id, email } = valid;
      const userData = await users.findOne({
        _id,
        email,
        accessToken: recievedAccessToken,
      });
      if (!userData) throw new Error("User Not Found");

      // Set cookie with the received access token and a 24-hour expiration
      response.cookies.set("token", recievedAccessToken, {
        maxAge: 24 * 60 * 60, // 24 hours in seconds
      });
      return response;
    }

    // Token not valid condition
    const userFromToken = await users.findOne({ recievedAccessToken });
    if (!userFromToken) throw new Error("Token is invalid");
    const recievedRefreshToken = userFromToken?.refreshToken;
    if (!recievedRefreshToken) {
      userFromToken.accessToken = "";
      userFromToken.refreshToken = "";
      await userFromToken.save();
      throw new Error("Invalid Refresh key");
    }

    // Check if refresh key is valid
    const validRefresh = verify(recievedRefreshToken, refreshKey);

    // If invalid refresh token
    if (!validRefresh) {
      userFromToken.accessToken = "";
      userFromToken.refreshToken = "";
      await userFromToken.save();
      throw new Error("Invalid Refresh key");
    }

    const { _id, email, accessToken } = validRefresh;

    // If access tokens do not match
    if (accessToken !== recievedAccessToken) {
      userFromToken.accessToken = "";
      userFromToken.refreshToken = "";
      await userFromToken.save();
      throw new Error("Invalid access key");
    }

    // Generate new access and refresh tokens
    const newAccessToken = sign({ email, _id, Date: new Date() }, accessKey, {
      expiresIn: "24h", // 24 hours
    });
    const newRefreshToken = sign(
      { email, _id, accessToken: newAccessToken, Date: new Date() },
      refreshKey,
      { expiresIn: "30d" } // 30 days
    );

    userFromToken.accessToken = newAccessToken;
    userFromToken.refreshToken = newRefreshToken;
    await userFromToken.save();

    // Set the new access token in a cookie with a 24-hour expiration
    response.cookies.set("token", newAccessToken, {
      maxAge: 24 * 60 * 60, // 24 hours in seconds
    });

    return response;
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ error: true }, { status: 401 });
  }
};

export const POST = async (req) => {
  try {
    await ConnectDB();
    await BackupDB();
    const data = await req.json();

    if (!data || !data?.email || !data?.password)
      throw new Error("Incorrect Credentials");

    const user = await users.findOne({ email: data?.email });
    if (!user) throw new Error("Incorrect Credentials");

    const verifyPass = await compare(data?.password, user?.password);
    if (!verifyPass) throw new Error("Incorrect Credentials");

    // Generate new access and refresh tokens
    const response = new NextResponse();

    const accessToken = sign(
      { email: data?.email, _id: user?._id, Date: new Date() },
      accessKey,
      {
        expiresIn: "24h", // 24 hours
      }
    );
    const refreshToken = sign(
      {
        email: data?.email,
        _id: user?._id,
        accessToken: accessToken,
        Date: new Date(),
      },
      refreshKey,
      {
        expiresIn: "30d", // 30 days
      }
    );

    user.refreshToken = refreshToken;
    user.accessToken = accessToken;
    await user.save();

    // Set the access token in a cookie with a 24-hour expiration
    response.cookies.set("token", accessToken, {
      maxAge: 24 * 60 * 60, // 24 hours in seconds
    });

    return response;
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ error: error?.message }, { status: 405 });
  }
};

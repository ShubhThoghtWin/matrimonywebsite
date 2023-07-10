import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

const options = {
  providers: [
    GoogleProvider({
      clientId:
        "667823901744-dtqc8cuhfpdp31v7qrimab29l1183reh.apps.googleusercontent.com", // Replace with your actual Google Client ID
      clientSecret: "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", // Replace with your actual Google Client Secret
    }),
    // Add more providers here as needed
  ],
  // Add additional NextAuth.js options here
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

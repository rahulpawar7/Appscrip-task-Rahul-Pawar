import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;
  if (username === "admin" && password === "password") {
    res.status(200).json({ token: "authenticated" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}

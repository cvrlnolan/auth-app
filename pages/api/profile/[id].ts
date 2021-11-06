import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/firebaseAdminInit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query;
  try {
    const user = await db
      .collection("users")
      .doc(id as string)
      .get();
    res.status(200).json(user.data());
  } catch (e: any) {
    console.log(e.message);
    res.status(400).end();
  }
}

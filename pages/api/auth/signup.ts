import { NextApiHandler } from "next";
import bcrypt from "bcryptjs";
import prisma from "../../../prisma/client";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET || "secret";

const handler: NextApiHandler = async (req, res) => {
  const { method } = req;

  if (method !== "POST") {
    return res.status(500).json("method not allowed");
  }
  try {
    const { email, password } = req.body;

    const hash = bcrypt.hashSync(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    const { password: removedPassword, ...userWithoutPassword } = user;

    const token = jwt.sign(userWithoutPassword, secret);

    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export default handler;

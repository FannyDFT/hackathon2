import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      const getAllUsers = await prisma.user.findMany();
      res.status(200).json(getAllUsers);
      break;
    case "POST":
      const newUser = await prisma.user.create({
        data: {
          email: req.body.email,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phone: req.body.phone,
          birthDate: req.body.birthDate,
          cardNumber: req.body.cardNumber,
          licence: req.body.licence,
        },
      });
      res.status(200).json(newUser);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;

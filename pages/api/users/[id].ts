import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      const getOneUser = await prisma.user.findUnique({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(getOneUser);
      break;
    case "PUT":
      const updateUser = await prisma.user.update({
        where: { id: id as string },
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
      res.status(200).json(updateUser);
      break;
    case "DELETE":
      const deleteUser = await prisma.user.delete({
        where: { id: id as string },
      });
      res.status(200).json(deleteUser);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;

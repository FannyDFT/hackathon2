import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      const getOneReservation = await prisma.reservation.findUnique({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(getOneReservation);
      break;
    case "PUT":
      const updateReservation = await prisma.reservation.update({
        where: { id: id as string },
        data: {
          carId: req.body.carId,
          userId: req.body.userId,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
        },
      });
      res.status(200).json(updateReservation);
      break;
    case "DELETE":
      const deleteReservation = await prisma.reservation.delete({
        where: { id: id as string },
      });
      res.status(200).json(deleteReservation);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;

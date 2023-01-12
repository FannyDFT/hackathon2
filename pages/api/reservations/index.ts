import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      const reservations = await prisma.reservation.findMany();
      res.status(200).json(reservations);
      break;
    case "POST":
      const newReservations = await prisma.reservation.create({
        data: {
          carId: req.body.carId,
          userId: req.body.userId,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
        },
      });
      res.status(200).json(newReservations);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;

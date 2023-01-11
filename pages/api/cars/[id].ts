import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      const getOneCar = await prisma.car.findUnique({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(getOneCar);
      break;
    case "PUT":
      const updateCar = await prisma.car.update({
        where: { id: id as string },
        data: {
          brand: req.body.brand,
          model: req.body.model,
          color: req.body.color,
          name: req.body.name,
          fuel: req.body.fuel,
          year: req.body.year,
          plate: req.body.plate,
          seats: req.body.seats,
          doors: req.body.doors,
          price: req.body.price,
          kilometers: req.body.kilometers,
        },
      });
      res.status(200).json(updateCar);
      break;
    case "DELETE":
      const deleteCar = await prisma.car.delete({
        where: { id: id as string },
      });
      res.status(200).json(deleteCar);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;

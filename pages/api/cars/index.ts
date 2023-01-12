import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      const getAllCars = await prisma.car.findMany();
      res.status(200).json(getAllCars);
      break;
    case "POST":
      const newCar = await prisma.car.create({
        data: {
          brand: req.body.brand,
          model: req.body.model,
          avatarUrl: req.body.avatarUrl,
          color: req.body.color,
          name: req.body.name,
          fuel: req.body.fuel,
          clutch: req.body.clutch,
          year: req.body.year,
          plate: req.body.plate,
          seats: req.body.seats,
          doors: req.body.doors,
          price: req.body.price,
          kilometers: req.body.kilometers,
        },
      });
      res.status(200).json(newCar);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;

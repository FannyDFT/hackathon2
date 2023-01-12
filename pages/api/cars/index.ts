import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
import cloudinaryUpload from "../../../src/utils/cloudinaryUpload";
import asyncFormParse from "../../../src/utils/multiparty";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const getAllCars = await prisma.car.findMany();
      res.status(200).json(getAllCars);
      break;
    case "POST":
      const { fields, files } = await asyncFormParse(req);
      console.log(fields, files);

      const result = await Promise.all(
        files.files.map((file: any) => cloudinaryUpload(file.path))
      );

      const newCar = await prisma.car.create({
        data: {
          brand: fields.brand[0],
          model: fields.model[0],
          avatarUrl: result[0].url,
          color: fields.color[0],
          name: fields.name[0],
          fuel: fields.fuel[0],
          clutch: fields.clutch[0],
          year: +fields.year[0],
          plate: fields.plate[0],
          seats: +fields.seats[0],
          doors: +fields.doors[0],
          price: +fields.price[0],
          kilometers: +fields.kilometers[0],
        },
      });

      res.status(200).json(newCar);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;

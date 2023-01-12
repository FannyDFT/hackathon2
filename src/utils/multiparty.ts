import { Form } from "multiparty";
import { NextApiRequest } from "next";

const asyncFormParse = (
  req: NextApiRequest
): Promise<{ fields: any; files: any }> =>
  new Promise((resolve, reject) => {
    const form = new Form();
    form.parse(req, async (error, fields, files) => {
      if (error) {
        reject(error);
      }

      resolve({ fields, files });
    });
  });

export default asyncFormParse;

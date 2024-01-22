import type { NextApiRequest, NextApiResponse } from "next";

const ApiKey = process.env.MC_API_KEY || process.env.NEXT_PUBLIC_MC_API_KEY;
const DC = process.env.MC_DC || process.env.NEXT_PUBLIC_MC_DC;
const ListID = process.env.MC_LIST_ID || process.env.NEXT_PUBLIC_MC_LIST_ID;

export default async function handleNewsLetter(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    const response = await fetch(
      `https://${DC}.api.mailchimp.com/3.0/lists/${ListID}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `apikey ${ApiKey}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      }
    );

    try {
      if (response.ok) {
        return res.status(200).json({ message: "Suscripción exitosa" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "Error al suscribirse al boletín de noticias" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}

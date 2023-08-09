"use server";
import { TrackClient, RegionUS } from "customerio-node";
import axios from "axios";

export const register = async (email: string) => {
  const cio = new TrackClient(process.env.SITE_ID!, process.env.API_KEY!, {
    region: RegionUS,
  });

  await cio.identify(email);
  await axios.post(
    "https://track.customer.io/api/v1/32segments/%7Bsegment_id%7D/add_customers",
    {
      ids: [email],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );
};

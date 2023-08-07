"use server";
import { TrackClient, RegionUS } from "customerio-node";

export const register = async (email: string) => {
  const cio = new TrackClient(process.env.SITE_ID!, process.env.API_KEY!, {
    region: RegionUS,
  });

  await cio.identify(5, {
    email,
  });
};

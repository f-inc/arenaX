"use server";
import { TrackClient, RegionUS } from "customerio-node";
import axios from "axios";
import Airtable from "airtable";

export const register = async (email: string) => {
  // const cio = new TrackClient(process.env.SITE_ID!, process.env.API_KEY!, {
  //   region: RegionUS,
  // });
  // console.log(email);
  // await cio
  //   .identify(email)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     throw new Error("Error identifying user");
  //   });
  // await axios
  //   .post(
  //     "https://track.customer.io/api/v1/segments/32/add_customers",
  //     {
  //       ids: [email],
  //     },
  //     {
  //       headers: {
  //         Authorization: `Basic ${Buffer.from(
  //           `${process.env.SITE_ID}:${process.env.API_KEY}`
  //         ).toString("base64")}`,
  //       },
  //     }
  //   )
  //   .catch((err) => {
  //     console.log(err);
  //     throw new Error("Error adding user to segment");
  //   });

  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE,
    endpointUrl: "https://api.airtable.com",
  });

  var base = airtable.base("appsQtTdmq3RUMi6q");

  base("Table 1")
    .create([
      {
        fields: {
          Email: email,
        },
      },
    ])
    .then((records) => {
      console.log(records);
    })
    .catch((err) => {
      console.log(err);
      throw new Error("Error adding user to segment");
    });
};

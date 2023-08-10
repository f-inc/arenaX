
import { TrackClient } from "customerio-node";

const CUSTOMER_IO_TRACK_API_KEY = process.env
  .CUSTOMER_IO_TRACK_API_KEY as string;
const CUSTOMER_IO_TRACK_SITE_ID = process.env
  .CUSTOMER_IO_TRACK_SITE_ID as string;

export default function getCioTrackClient() {
  return new TrackClient(CUSTOMER_IO_TRACK_SITE_ID, CUSTOMER_IO_TRACK_API_KEY, {
    timeout: 5000,
  });
}
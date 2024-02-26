import axios from "axios";

import { CONTACT_OUR_SUPPORT } from "./CONSTANTS";

export const ContactOurSupport = async ({ fullName, email, message }) => {
  const data = { fullName, email, message };
  const response = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/${CONTACT_OUR_SUPPORT}`,
    data,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response.data;
};

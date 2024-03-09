import axiosClient from "../../utils/axiosClient";

import {
  MAILING_LIST,
  CONTACT_OUR_SUPPORT,
  DISPUTE_TRANSACTION,
  UPDATE_TRANSACTION_STATUS,
} from "./CONSTANTS";

export const SaveEmailToMailingList = async ({ email }) => {
  const data = { email };
  const response = await axiosClient.post(`${MAILING_LIST}`, data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.data;
};

export const ContactOurSupport = async ({ fullName, email, message }) => {
  const data = { fullName, email, message };
  const response = await axiosClient.post(`${CONTACT_OUR_SUPPORT}`, data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.data;
};

export const DisputeTransaction = async ({
  transactionId,
  reason,
  description,
  userId,
}) => {
  const data = { transactionId, reason, description, userId };
  const response = await axiosClient.post(`${DISPUTE_TRANSACTION}`, data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.data;
};

export const UpdateTransactionStatus = async ({ transactionId, newStatus }) => {
  const data = { transactionId, newStatus };
  const response = axiosClient.patch(`${UPDATE_TRANSACTION_STATUS}`, data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.data;
};

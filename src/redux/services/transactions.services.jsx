import axiosClient from "../../utils/axiosClient";

import {
  CREATE_TRANSACTION,
  VERIFY_TRANSACTION,
  VERIFY_TRANSACTION_DETAILS,
} from "./CONSTANTS";

export const CreateTransaction = async ({
  reference,
  buyerId,
  formData,
  redirectUrl,
}) => {
  const transactionData = {
    reference,
    buyerId,
    formData,
    redirectUrl,
  };
  const response = await axiosClient.post(
    `${CREATE_TRANSACTION}`,
    transactionData,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response.data;
};

export const VerifyTransactionDetails = async ({ formData }) => {
  const transactionData = {
    formData,
  };
  const response = await axiosClient.post(
    `${VERIFY_TRANSACTION_DETAILS}`,
    transactionData,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response.data;
};

export const VerifyTransaction = async ({ transactionId, action }) => {
  const transactionData = {
    transactionId,
    action,
  };
  const response = await axiosClient.post(
    `${VERIFY_TRANSACTION}`,
    transactionData,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response.data;
};

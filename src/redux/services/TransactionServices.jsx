import axiosClient from "../../services/api";

import {
  CREATE_TRANSACTION,
  VERIFY_TRANSACTION,
  VERIFY_TRANSACTION_DETAILS,
} from "../constants";

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
    transactionData
  );
  return response.data;
};

export const VerifyTransactionDetails = async ({ formData }) => {
  const transactionData = {
    formData,
  };
  const response = await axiosClient.post(
    `${VERIFY_TRANSACTION_DETAILS}`,
    transactionData
  );
  return response.data;
};

export const VerifyTransaction = async ({ transactionId, action }) => {
  const transactionData = {
    transactionId,
    action,
  };
  const response = await axiosClient.post(`${VERIFY_TRANSACTION}`);
  return response.data;
};

import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface PayloadData {
  status: number;
  data?: {
    msg?: string;
    status?: string;
  };
}

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.warn("RTK Query encountered an error:", action.error);

    const payloadData = action.payload as PayloadData;

    console.log("Action Error:", action.error);
    console.log("Action Payload:", action.payload);

    const errorMessage: string =
      payloadData?.data?.msg ||
      (typeof payloadData?.data?.status === "string"
        ? payloadData?.data?.status
        : "An unknown error occurred") ||
      "An unknown error occurred";

    console.log("Error Message:", errorMessage);

    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return next(action);
};

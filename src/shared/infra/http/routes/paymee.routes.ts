import { Router } from "express";

import { CreatePixTransactionController } from "@modules/paymee/useCases/createPixTransaction/CreatePixTransactionController";
import { GetPixTransactionController } from "@modules/paymee/useCases/getPixTransaction/GetPixTransactionController";
import { GetTransactionController } from "@modules/paymee/useCases/getTransaction/GetTransactionController";
import { RefundPixTransactionController } from "@modules/paymee/useCases/refundPixTransaction/RefundPixTransactionController";

const payMeeRoutes = Router();

const createPixTransactionController = new CreatePixTransactionController();
const refundPixTransactionController = new RefundPixTransactionController();
const getTransactionController = new GetTransactionController();
const getPixTransactionController = new GetPixTransactionController();

payMeeRoutes.get(
  "/transactions/pix/:transactionId",
  getPixTransactionController.handle
);
payMeeRoutes.get(
  "/transactions/:transactionId",
  getTransactionController.handle
);
payMeeRoutes.post("/checkout", createPixTransactionController.handle);
payMeeRoutes.put(
  "/transactions/:transactionId/refund",
  refundPixTransactionController.handle
);

export { payMeeRoutes };

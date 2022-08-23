import { Router } from "express";

import { CreatePixTransactionController } from "@modules/paymee/useCases/createPixTransaction/CreatePixTransactionController";

const payMeeRoutes = Router();

const createPixTransactionController = new CreatePixTransactionController();

payMeeRoutes.post("/", createPixTransactionController.handle);

export { payMeeRoutes };

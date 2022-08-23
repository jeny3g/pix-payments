import { Router } from "express";

import { payMeeRoutes } from "./paymee.routes";

const router = Router();

router.use("/paymee", payMeeRoutes);

export { router };

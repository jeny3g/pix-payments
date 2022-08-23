import { Request, Response } from "express";
import { container } from "tsyringe";

import { IPayMeeRequest } from "@modules/paymee/dtos/IPayMeeRequest/IPayMeeRequest";

import { CreatePixTransactionUseCase } from "./CreatePixTransactionUseCase";

class CreatePixTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      currency,
      amount,
      referenceCode,
      callbackURL,
      maxAge,
      paymentMethod,
      phone,
      shopper,
    }: IPayMeeRequest = request.body;

    const createPixTransaction = container.resolve(CreatePixTransactionUseCase);

    const transaction = await createPixTransaction.execute({
      currency,
      amount,
      referenceCode,
      callbackURL,
      maxAge,
      paymentMethod,
      phone,
      shopper,
    });

    return response.status(201).json(transaction);
  }
}

export { CreatePixTransactionController };

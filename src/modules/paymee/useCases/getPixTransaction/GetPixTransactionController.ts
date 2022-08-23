import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetPixTransactionUseCase } from "./GetPixTransactionUseCase";

class GetPixTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { transactionId } = request.params;

    const getTransaction = container.resolve(GetPixTransactionUseCase);

    const transaction = await getTransaction.execute(transactionId);

    return response.status(201).json(transaction);
  }
}

export { GetPixTransactionController };

import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetTransactionUseCase } from "./GetTransactionUseCase";

class GetTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { transactionId } = request.params;

    const getTransaction = container.resolve(GetTransactionUseCase);

    const transaction = await getTransaction.execute(transactionId);

    return response.status(201).json(transaction);
  }
}

export { GetTransactionController };

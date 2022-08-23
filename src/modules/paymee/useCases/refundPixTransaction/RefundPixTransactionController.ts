import { Request, Response } from "express";
import { container } from "tsyringe";

import {
  IRefundPixTransactionRequest,
  RefundPixTransactionUseCase,
} from "./RefundPixTransactionUseCase";

class RefundPixTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { amount, reason }: IRefundPixTransactionRequest = request.body;
    const { transactionId } = request.params;

    const refundPixTransaction = container.resolve(RefundPixTransactionUseCase);

    const transaction = await refundPixTransaction.execute({
      transactionId,
      amount,
      reason,
    });

    return response.status(201).json(transaction);
  }
}

export { RefundPixTransactionController };

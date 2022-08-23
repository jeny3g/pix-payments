import { injectable } from "tsyringe";

import { IPayMeeRefundResponse } from "@modules/paymee/dtos/IPayMeeRefundResponse/IPayMeeRefundResponse";
import { apiPayMee } from "@modules/paymee/services/api";

export interface IRefundPixTransactionRequest {
  transactionId: string;
  amount: number;
  reason: string;
}

@injectable()
class RefundPixTransactionUseCase {
  async execute({
    transactionId,
    amount,
    reason,
  }: IRefundPixTransactionRequest): Promise<IPayMeeRefundResponse> {
    const response = await apiPayMee.post<IPayMeeRefundResponse>(
      `/transactions/${transactionId}/refund`,
      {
        amount,
        reason,
      }
    );

    return response.data;
  }
}

export { RefundPixTransactionUseCase };

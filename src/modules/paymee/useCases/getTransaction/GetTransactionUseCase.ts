import { injectable } from "tsyringe";

import { IPayMeePayoutResponse } from "@modules/paymee/dtos/IPayMeeResponse/IPayMeePayoutResponse";
import { apiPayMee } from "@modules/paymee/services/api";

@injectable()
class GetTransactionUseCase {
  async execute(transactionId: string): Promise<IPayMeePayoutResponse> {
    const response = await apiPayMee.get<IPayMeePayoutResponse>(
      `transactions/${transactionId}`
    );

    return response.data;
  }
}

export { GetTransactionUseCase };

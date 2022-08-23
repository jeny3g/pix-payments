import { injectable } from "tsyringe";

import { IPayMeeQrCode } from "@modules/paymee/dtos/IPayMeeResponse/IPayMeeQrCode";
import { apiPayMee } from "@modules/paymee/services/api";

@injectable()
class GetPixTransactionUseCase {
  async execute(transactionId: string): Promise<IPayMeeQrCode> {
    const response = await apiPayMee.get<IPayMeeQrCode>(
      `transactions/pix/${transactionId}`
    );

    return response.data;
  }
}

export { GetPixTransactionUseCase };

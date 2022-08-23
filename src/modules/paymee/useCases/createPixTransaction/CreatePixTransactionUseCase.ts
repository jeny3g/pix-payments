import { injectable } from "tsyringe";

import { IPayMeeRequest } from "@modules/paymee/dtos/IPayMeeRequest/IPayMeeRequest";
import { IPayMeeResponse } from "@modules/paymee/dtos/IPayMeeResponse/IPayMeeResponse";
import { apiPayMee } from "@modules/paymee/services/api";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreatePixTransactionUseCase {
  async execute(request: IPayMeeRequest): Promise<IPayMeeResponse> {
    this.mapDefaultPayMeeRequest(request);

    if (!request.amount) {
      throw new AppError("Amount is required");
    }

    const response = await apiPayMee("teste", "teste").post<IPayMeeResponse>(
      "checkout/transparent",
      request
    );

    return response.data;
  }

  private mapDefaultPayMeeRequest(request: IPayMeeRequest): IPayMeeRequest {
    request.currency = request.currency || "BRL";
    request.paymentMethod = request.paymentMethod || "PIX";

    return request;
  }
}

export { CreatePixTransactionUseCase };

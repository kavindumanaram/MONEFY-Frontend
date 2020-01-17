import { Injectable } from "@angular/core";
import { PaymentDetail } from "./payment-detail.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = "http://localhost:53546/api/";

  constructor(private http: HttpClient) {}

  postPaymentDetail(FormData: PaymentDetail) {
    return this.http.post(this.rootURL + "paymentdetails", FormData);
  }
}

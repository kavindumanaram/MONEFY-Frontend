import { Component, OnInit } from "@angular/core";
import { PaymentDetailService } from "src/app/shared/payment-detail.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-payment-detail",
  templateUrl: "./payment-detail.component.html",
  styles: []
})
export class PaymentDetailComponent implements OnInit {
  constructor(
    private service: PaymentDetailService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      Id: 0,
      CardOwnerName: "",
      CardNumber: "",
      ExpirationDate: "",
      CVV: ""
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.Id == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail(form.value).subscribe(
      res => {
        form.resetForm(form);
        this.toastr.success("Submitted Succesfully", "Payment Detail Register");
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putPaymentDetail(form.value).subscribe(
      res => {
        form.resetForm(form);
        this.toastr.info("Updated Succesfully", "Payment Detail Register");
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }
}

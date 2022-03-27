import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GeneralesService {

  constructor(private toastr: ToastrService) {}

  public showSuccess(title: string, msg: string) {
    this.toastr.success(msg, title);
  }

  public showError(title: string, msg: string) {
    this.toastr.error(msg, title);
  }

  public showWarning(title: string, msg: string) {
    this.toastr.warning(msg, title);
  }
}

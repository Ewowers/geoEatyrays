import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {

  constructor(public modalCtrl: ModalController) { }

  isLoggedIn:boolean = false

  dismiss() {
    this.modalCtrl.dismiss();
  }

  register(form) {
    console.log(form.value)
  }

  login(form) {
    console.log(form.value)
  }

  getIsLoggedIn() {
    return this.isLoggedIn
  }

}

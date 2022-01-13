import {Component, OnInit} from '@angular/core';
import { ActionSheetController, ModalController } from "@ionic/angular";
import { AuthComponent } from '../../auth/auth.component'
import { EditProfileComponent } from './edit-profile/edit-profile.component'
import { MyAppealsComponent } from './my-appeals/my-appeals.component'

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit{

  user:any = {
    email: 'test@gmail.com',
    name: 'Иван',
    lastname: 'Иванов',
    iin: '123456789000'
  }

  constructor(public actionSheetController: ActionSheetController,
              private modalCtrl: ModalController) {}

  currentLanguage:string = 'Русский'

  async ngOnInit() {
    // await this.openModalAuth()
  }

  async openModalAuth() {
    const authModal = await this.modalCtrl.create({
      component: AuthComponent
    })
    await authModal.present()
  }

  async openModalProfileEdit() {
    const editModal = await this.modalCtrl.create({
      component: EditProfileComponent
    })
    await editModal.present()
  }
  async openModalMyAppeals() {
    const appealsModal = await this.modalCtrl.create({
      component: MyAppealsComponent
    })
    await appealsModal.present()
  }

  async chooseLanguage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Выберите язык',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Русский',
        handler: () => {
          this.currentLanguage = 'Русский'
          console.log('Ru clicked');
        }
      }, {
        text: 'Казахский',
        handler: () => {
          this.currentLanguage = 'Казахский'
          console.log('Kz clicked');
        }
      }, {
        text: 'Английский',
        handler: () => {
          this.currentLanguage = 'Английский'
          console.log('En clicked');
        }
      }, {
        text: 'Отмена',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}

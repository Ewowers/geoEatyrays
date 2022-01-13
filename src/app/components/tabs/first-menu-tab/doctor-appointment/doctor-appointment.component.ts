import { Component } from '@angular/core';
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";


@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.scss'],
})
export class DoctorAppointmentComponent {

  mop: string[] = ["Test 1", "Test 2"];

  constructor(private pickerController: PickerController) {}

  async showMop() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Отиена",
          role: 'cancel'
        },
        {
          text:'ОК',
          handler:(value:any) => {
            console.log(value);
          }
        }
      ],
      columns:[{
        name:'Mop',
        options:this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptions(){
    let options = [];
    this.mop.forEach(x => {
      options.push({text:x,value:x});
    });
    return options;
  }
}

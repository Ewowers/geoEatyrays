import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class tab4Service {
  private appeals:any[] = [
    {
      id: '1',
      title: 'Отопление',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias animi aperiam autem beatae cupiditate delectus dicta, dolor dolore ea, enim est, et eveniet harum hic id illum in incidunt libero magnam magni maxime minus mollitia natus necessitatibus nobis nostrum obcaecati odit recusandae rerum sed vel voluptatem voluptatibus. Distinctio, rem?',
      date: '11 Ноября 2018 09:40'
    },
    {
      id: '2',
      title: 'Здравствуйте',
      text: 'enim est, et eveniet harum hic id illum in incidunt libero magnam magni maxime minus mollitia natus necessitatibus nobis nostrum obcaecati odit recusandae rerum sed vel voluptatem voluptatibus. Distinctio, rem?',
      date: '11 Ноября 2018 09:40'
    },
  ]

  constructor() {
  }

  getAllAppeals() {
    return [...this.appeals]
  }

  getAppeal(id:string) {
    return {...this.appeals.find(item => {
        return item.id === id
      })}
  }
}

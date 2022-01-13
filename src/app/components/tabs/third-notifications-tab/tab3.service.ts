import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class tab3Service {
  private notifications:any[] = [
    {
      id: '1',
      title: 'Уважаемые жители и гости',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias animi aperiam autem beatae cupiditate delectus dicta, dolor dolore ea, enim est, et eveniet harum hic id illum in incidunt libero magnam magni maxime minus mollitia natus necessitatibus nobis nostrum obcaecati odit recusandae rerum sed vel voluptatem voluptatibus. Distinctio, rem?',
      date: '11 Ноября 2018 09:40'
    },
    {
      id: '2',
      title: 'Уведомление',
      text: 'enim est, et eveniet harum hic id illum in incidunt libero magnam magni maxime minus mollitia natus necessitatibus nobis nostrum obcaecati odit recusandae rerum sed vel voluptatem voluptatibus. Distinctio, rem?',
      date: '11 Ноября 2018 09:40'
    },
  ]

  constructor() {
  }

  getCounter() {
    return this.notifications.length
  }

  getAllNotifications() {
    return [...this.notifications]
  }

  getNotification(id:string) {
    return {...this.notifications.find(item => {
      return item.id === id
    })}
  }

  setNotification(data) {
    this.notifications.push(data)
    console.log(this.notifications)
  }

}

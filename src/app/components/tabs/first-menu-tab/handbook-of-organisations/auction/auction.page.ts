import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { baseUrl } from "../../../../../../environments/environment";
@Component({
  selector: "app-services",
  templateUrl: "./auction.page.html",
  styleUrls: ["./auction.page.scss"],
})
export class AuctionPage implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchData();
  }
  administrations = [];
  eatyrays = [];
  administrationOpen = false;
  eatyrayOpen = false;

  fetchData() {
    this.http.get(baseUrl + "/api/auction").subscribe(
      (data = []) => {
        for (let key in data) {
          if (data[key].type === "АДМИНИСТРАТИВНЫЕ РАЙОНЫ") {
            if (this.administrations.find((item) => item.region === data[key].region)) {
              this.administrations.find((item) => item.region === data[key].region).datas.push(data[key]);
            } else
              this.administrations.push({
                region: data[key].region,
                isOpen: false,
                datas: [data[key]],
              });
          } else {
            this.eatyrays.push(data[key]);
          }
        }
        console.log(this.administrations);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("An error occurred:", err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }
}

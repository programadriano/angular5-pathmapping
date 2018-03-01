import { Component } from "@angular/core";
import { UserPipe } from "../app/pipes/user.pipe";
import { UserService } from "../app/services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  constructor(private userPipe: UserPipe, private userService: UserService) {}
}


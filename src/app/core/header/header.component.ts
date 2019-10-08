import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: String;

  constructor(userService: UserService) {
    userService.getUser().subscribe((usert) => { this.user = usert.name });
  }

  ngOnInit() {

  }

}

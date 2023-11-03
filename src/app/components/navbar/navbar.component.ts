import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {

  constructor(
    public readonly router: Router,
  ) { }

  ngOnInit() {}

  public goToHome(): void {
    return void this.router.navigateByUrl('/home');
  }

}

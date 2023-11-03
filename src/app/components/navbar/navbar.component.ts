import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {OptionsInterface} from "../../models/interfaces/options.interface";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor(
    private readonly router: Router,
  ) {
  }

  public navbarList: OptionsInterface[] = [
    {
      name: 'Entrar',
      link: '/login',
      img: 'assets/images/user.svg'
    },
    {
      name: 'Carrinho',
      link: '/market',
      img: 'assets/images/shopping.svg'
    }
  ];

  public optionsList: OptionsInterface[] = [
    {
      name: 'Produtos',
      link: '/products'
    },
    {
      name: 'Motor',
      link: '/products/motors'
    },
    {
      name: 'Câmbio',
      link: '/products/motors'
    },
    {
      name: 'Suspensão',
      link: '/products/motors'
    },
    {
      name: 'Freio',
      link: '/products/motors'
    },
    {
      name: 'Direção',
      link: '/products/motors'
    },
    {
      name: 'Juntas',
      link: '/products/motors'
    },
    {
      name: 'Acessórios',
      link: '/products/motors'
    },
  ];

  public goToRoute(route: string): void {
    return void this.router.navigateByUrl(route);
  }

}

import { Component } from '@angular/core';
import {OptionsInterface} from "../../models/interfaces/options.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  constructor(
    private readonly router: Router,
  ) { }

  public aboutItems: OptionsInterface[] = [
    {
      name: 'Quem somos',
      link: 'about-us',
    },
    {
      name: 'Políticas da loja',
      link: 'market-policy',
    },
    {
      name: 'Políticas de privacidade',
      link: 'privacy-policy'
    },
    {
      name: 'Lojas',
      link: '/markets'
    },
    {
      name: 'Blog',
      link: '/blog'
    }
  ];

  public serviceList: OptionsInterface[] = [
    {
      name: 'Contato',
      link: 'contacts'
    },
    {
      name: 'LGPD',
      link: 'lgpd',
    },
    {
      name: 'Dúvidas frequentes',
      link: '/doubts'
    }
  ];

  public openModal(topic: string): void {
    if (topic.includes('/'))
      return void this.router.navigateByUrl(topic);

    switch (topic) {
      case 'about-us':
        break;

      case 'market-policy':
        break;

      case 'privacy-policy':
        break;
    }
  }

}

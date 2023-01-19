import { Component, OnInit } from '@angular/core';
import { AProposComponent } from '../menus/a-propos/a-propos.component';
import { AcceuilComponent } from '../menus/acceuil/acceuil.component';
import { NosServicesComponent } from '../menus/nos-services/nos-services.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems = [
    {
      path: '/', Component: AcceuilComponent,
      name: 'Acceuil'
    },
    {
      path: '/a-propos', Component: AProposComponent,
      name: 'A propos'
    },
    {
      path: '/nos-services', Component: NosServicesComponent,
      name: 'Nos-Services',
    }
  ];

  constructor() { }
  isMenuOpen = false;

  onMenuLinkClick() {
    this.isMenuOpen = false;
  }
  
  ngOnInit(): void {
  }

}

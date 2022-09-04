import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Home',  icon: 'pe-7s-home'},
    { path: '/user', title: 'Perfil do Usuário',  icon:'pe-7s-user'},
    { path: '/unidade', title: 'Unidades de saúde',  icon:'pe-7s-like'},
    { path: '/questionario', title: 'Questionários de Saúde',  icon:'pe-7s-note2'},
    { path: '/maps', title: 'Mapa',  icon:'pe-7s-map-marker'},
    { path: '/notifications', title: 'Notificações',  icon:'pe-7s-bell'},
    { path: '/icons', title: 'Configurações',  icon:'pe-7s-config'},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}

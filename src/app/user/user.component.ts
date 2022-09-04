import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = {
    name: 'Fernanda Santos',
    email: '',
    firstName: 'Fernanda',
    secondName: 'Santos',
    username: 'fernanda.saude',
    address: 'Avenida 24 de Agosto',
    city: 'São Paulo',
    country: 'Brasil',
    postalCode: ''
  }
  constructor() { }

  ngOnInit() {
  }

  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    var color = '#24BFB5';
    $.notify({
        icon: "pe-7s-info",
        message: "Perfil atualizado com sucesso"
    },{
        type: type[color],
        timer: 1000,
        placement: {
            from: from,
            align: align
        }
    });
}

}

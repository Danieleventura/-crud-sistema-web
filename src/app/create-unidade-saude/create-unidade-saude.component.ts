import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-unidade-saude',
  templateUrl: './create-unidade-saude.component.html',
  styleUrls: ['./create-unidade-saude.component.scss']
})
export class CreateUnidadeSaudeComponent implements OnInit {
  stylesHide = {
    hide: [
      {
        featureType: 'transit',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }],
      }
    ],
  };

  daysWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado','Domingo']
  constructor(private route:Router) { }
  //json variables
  dataJson: any[];
  ngOnInit() {
    this.requestData();
  } 

  requestData() {
    fetch('assets/data/medicalSpeciality.json').then(res => res.json())
    .then(json => {
      this.dataJson = json;
    });
  }

  requestPage(){
    this.route.navigate(['/unidade']);
  }

  }

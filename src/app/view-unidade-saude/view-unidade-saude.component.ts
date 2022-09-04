import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-unidade-saude',
  templateUrl: './view-unidade-saude.component.html',
  styleUrls: ['./view-unidade-saude.component.scss']
})
export class ViewUnidadeSaudeComponent implements OnInit {
  dataJson: any[];
  data = {
      "id": '',
      "name":'',
      "address": '',
      "district": '',
      "phone": '',
      "time": '',
      "lat":'',  
      "lng": '',
      "city":'',
      "type": '',
      "management":'',
      "dependency": '',
      "CNES": '',
      "speciality":[]
  };
  id: any;
  size =0;
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
  marker='assets/img/marker-hospital.png';
  constructor(private route: ActivatedRoute, private route2:Router) { 
    this.route.params.subscribe(params => this.id= params['id']);
    this.requestData();
  }

  ngOnInit() {
  }

  requestData() {
    fetch('assets/data/data.json').then(res => res.json())
    .then(json => {
      this.dataJson = json;
      this.size = this.dataJson.length;
      for (var i = 0; i < this.size; i++) {
        if(this.dataJson[i].id == this.id){
          this.data.id = this.dataJson[i].id;
          this.data.name = this.dataJson[i].name;
          this.data.address = this.dataJson[i].address;
          this.data.phone = this.dataJson[i].phone;
          this.data.time = this.dataJson[i].time;
          this.data.lat = this.dataJson[i].lat;
          this.data.lng = this.dataJson[i].lng;
          this.data.city = this.dataJson[i].city;
          this.data.district = this.dataJson[i].district;
          this.data.type = this.dataJson[i].type;
          this.data.management = this.dataJson[i].management;
          this.data.dependency = this.dataJson[i].dependency;
          this.data.CNES = this.dataJson[i].CNES;
          this.data.speciality = this.dataJson[i].speciality;
        }
      }
    });
  }

  requestPage(id){
    this.route2.navigate(['/edit', id]);
  }

}
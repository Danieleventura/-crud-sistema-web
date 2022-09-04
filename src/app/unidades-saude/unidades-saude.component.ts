import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
@Component({
  selector: 'app-unidades-saude',
  templateUrl: './unidades-saude.component.html',
  styleUrls: ['./unidades-saude.component.scss']
})
export class UnidadesSaudeComponent implements OnInit {
    //json variables
    dataJson: any[];
    countData =0;
  constructor(private route:Router) { }

  ngOnInit() {
      this.requestData();
  }

  requestData() {
    fetch('assets/data/data.json').then(res => res.json())
    .then(json => {
      this.dataJson = json;
      this.countData = this.dataJson.length;
    });
  }

  requestPage(id){
    this.route.navigate(['/view', id]);
  }

}

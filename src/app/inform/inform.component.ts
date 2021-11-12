import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Inform } from '../inform';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.css']
})
export class InformComponent implements OnInit {

  results:any;    
  
  constructor(private dataService: ApiService) 
  {
    
  }

  
  ngOnInit(): void 
  {
    this.results = this.dataService.getInform();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  selectedPlate:string = '';
  selectedColor:string = '';
  selectedMark:string = '';
  selectedType:string = '';

  options = [
    {name:'Particular', id:'particular', value:'particular'},
    {name:'Público', id:'public', value:'public'}
  ]

  angForm: FormGroup;

  constructor(private fb: FormBuilder,private dataService: ApiService) 
  {
    this.angForm = this.fb.group({
      plate: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(10)]],
      color: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(30)]],
      mark: ['', [Validators.required,Validators.minLength(4), Validators.maxLength(30)]],
      type: ['', [Validators.required]]
    });
  }

  ngOnInit(): void 
  {
    
  }

  postdata(angForm: any)
  {
    this.dataService.createVehicle(this.selectedPlate, this.selectedColor, this.selectedMark, this.selectedType );
  }

  get plate() { return this.angForm.get('plate'); }

  get color() { return this.angForm.get('color'); }
 
  get mark() { return this.angForm.get('mark'); }

  get type() { return this.angForm.get('type'); }

}

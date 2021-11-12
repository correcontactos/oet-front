import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  selectedDocument:string = '';
  selectedFirstName:string = '';
  selectedSecondName:string = '';
  selectedLastName:string = '';
  selectedAddress:string = '';
  selectedPhone:string = '';
  selectedCity:string = '';
  selectedType:string = '';

  angForm: FormGroup;

  constructor(private fb: FormBuilder,private dataService: ApiService, private activatedRoute: ActivatedRoute) 
  {
    this.angForm = this.fb.group({
      document: ['', [Validators.required,Validators.minLength(4), Validators.maxLength(10)]],
      first_name: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(30)]],
      second_name: ['', [Validators.maxLength(30)]],
      last_name: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(30)]],
      address: ['', [Validators.required,Validators.minLength(4), Validators.maxLength(30)]],
      phone: ['', [Validators.required,Validators.minLength(7), Validators.maxLength(30)]],
      city: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(30)]],
      type: ['', Validators.required]
    });
  }

  ngOnInit(): void 
  {
    this.selectedType = String(this.activatedRoute.snapshot.paramMap.get('type'));
  }

  postdata(angForm: any)
  {
    
    this.dataService.createPerson(this.selectedDocument, this.selectedFirstName, this.selectedSecondName, this.selectedLastName, this.selectedAddress, this.selectedPhone, this.selectedCity, this.selectedType );
  }

  get document() { return this.angForm.get('document'); }

  get first_name() { return this.angForm.get('first_name'); }
 
  get second_name() { return this.angForm.get('second_name'); }

  get last_name() { return this.angForm.get('last_name'); }
  
  get address() { return this.angForm.get('address'); }
  
  get phone() { return this.angForm.get('phone'); }
  
  get city() { return this.angForm.get('city'); }
  
  get type() { return this.angForm.get('type'); }

}

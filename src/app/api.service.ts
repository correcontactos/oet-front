import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { User } from './users';
import { Inform } from './inform';

@Injectable({
providedIn: 'root'
})

export class ApiService 
{
  redirectUrl:string = '';
  baseUrl:string = "http://192.168.20.27/oet-back/public/api";
  useraccess:string = '';
  arr:any = [];
  arrr:any = [];
  arrlist:any = [];
  priv:any;
    
  constructor(private httpClient : HttpClient) { }

  public getInform()
  {
    this.arr = [];
    this.httpClient.get<any>(this.baseUrl + '/inform')
    .subscribe(data => { 
      for(let key in data.data) {
        this.arr.push(data.data[key])
      }
     })
    return this.arr;
  }

  public getPrivilege(id: number) 
  {
    return this.httpClient.get<any>(this.baseUrl + '/privileges/' + id)
    .pipe(map(Privilege => 
    {
      return Privilege;
    }));   
  }

  public createVehicle(plate: string, color:string, mark: string, type: string) {
    this.httpClient.post<any>(this.baseUrl + '/vehicle', { plate: plate, color: color, mark: mark, type: type })
    .subscribe({
      next: data => {
        if( data.success == false )
        {
          alert(data.error);
        }
        else
        {
          alert("Registro creado");
          window.location.href = '/registerperson/owner'
        }
      }
    })
  }

  public createPerson(document: string, first_name:string, second_name: string, last_name: string, address: string, phone: string, city: string, type: string ) {
    this.httpClient.post<any>(this.baseUrl + '/person', { document: document, first_name: first_name, second_name: second_name, last_name: last_name, address: address, phone: phone, city: city, type: type })
    .subscribe({
      next: data => {
        if( data.success == false )
        {
          alert(data.error);
        }
        else
        {
          alert("Registro creado");
          window.location.href = '/inform'
        }
      }
    })
  }


  /*public createUser(user: string, pass:string, privilege: number) {
    this.httpClient.post<any>(this.baseUrl + '/users', { useraccess: this.getAccess(), user: user, pass:pass, privilege_id :privilege })
    .subscribe({
      next: data => {
        alert("Registro creado");
        window.location.reload();
      },
      error: error => {
        //alert("Ocurrio un error, intente nuevamente")
        alert(error.error)
      }
    })
  }*/
}
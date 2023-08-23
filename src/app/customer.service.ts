import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  public createCustomer(customer:any){
    return this.http.post(`${"http://localhost:8080"}/customer/create`,customer);
  }

  public getCustomerList() {
    return this.http.get(`${"http://localhost:8080"}/customer/get_customer_list`);
  }

  public delete(id:any){
    return this.http.delete(`${"http://localhost:8080"}/customer/delete/${id}`);
  }

  public update(id:any,customer:any){
    return this.http.put(`${"http://localhost:8080"}/customer/update/${id}`,customer);
  }
}

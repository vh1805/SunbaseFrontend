import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit{
  Customer = {
    "firstName":'',
    "lastName":'',
    "street":'',
    "address":'',
    "city":'',
    "state":'',
    "email":'',
    "phone":''
  };
  CustomerList =[
    {
      "customerId":'',
      "firstName":'',
      "lastName":'',
      "street":'',
      "address":'',
      "city":'',
      "state":'',
      "email":'',
      "phone":''
    }
  ];
  constructor(private _customerService : CustomerService){}
  ngOnInit(): void {
      this._customerService.getCustomerList().subscribe(
        (data:any)=>{
          this.CustomerList=data;
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      )
  }
  formSubmit(){
    if(this.Customer.firstName.trim()=="" || this.Customer.firstName==null){
      return;
    }
    if(this.Customer.lastName.trim()=="" || this.Customer.lastName==null){
      return;
    }
    this._customerService.createCustomer(this.Customer).subscribe(
      (data:any)=>{
        console.log(data);
        this.Customer = {
          "firstName":'',
          "lastName":'',
          "street":'',
          "address":'',
          "city":'',
          "state":'',
          "email":'',
          "phone":''
        };
      },
      (error)=>{
        console.log(error);
      }
    )
  }

 deleteButton(id:any){
  this._customerService.delete(id).subscribe(
  (data:any)=>{
    console.log(data);
  },
  (error)=>{
    console.log(error);
  }
  )
 }

}

import { Component,OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
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
  public constructor(private _customerService: CustomerService, private _router:ActivatedRoute){

  }

  customerId=0;
  ngOnInit(): void {
     this.customerId= this._router.snapshot.params['id'];
     console.log(this.customerId);
  }


  formSubmit(){
    this._customerService.update(this.customerId,this.Customer).subscribe(
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
}

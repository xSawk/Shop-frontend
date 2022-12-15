import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CartSummary } from '../common/model/cart/cartSummary';
import { OrderDto } from './model/orderDto';
import { OrderSummary } from './model/orderSummary';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{

  cartSummary!: CartSummary; 
  formGroup!: FormGroup;
  orderSummary!: OrderSummary; 



  constructor(private cookieSerivce: CookieService, private orderSerivce: OrderService,
    private formBuilder: FormBuilder
    ) {
    
  }
  ngOnInit(): void {
    this.checkCartEmpty();

    this.formGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  checkCartEmpty(){
    let cartId = Number(this.cookieSerivce.get("cartId"));
    this.orderSerivce.getCart(cartId).subscribe(summary => this.cartSummary = summary);

  }

  submit(){
    if(this.formGroup.valid){
      this.orderSerivce.placeOrder({
        firstname: this.formGroup.get("firstname")?.value,
        lastname: this.formGroup.get("lastname")?.value,
        street: this.formGroup.get("street")?.value,
        zipcode: this.formGroup.get("zipcode")?.value,
        city: this.formGroup.get("city")?.value,
        email: this.formGroup.get("email")?.value,
        phone: this.formGroup.get("phone")?.value,
        cartId: Number(this.cookieSerivce.get("cartId"))
      } as OrderDto)
        .subscribe(orderSummary => {
            this.orderSummary = orderSummary;
            this.cookieSerivce.delete("cartId");
          
        })
    }
  }

  get firstname(){
    return this.formGroup.get("firstname");
  }
  get lastname(){
    return this.formGroup.get("lastname");
  }
  get street(){
    return this.formGroup.get("street");
  }
  get zipcode(){
    return this.formGroup.get("zipcode");
  }
  get city(){
    return this.formGroup.get("city");
  }
  get email(){
    return this.formGroup.get("email");
  }
  get phone(){
    return this.formGroup.get("phone");
  }

  

}

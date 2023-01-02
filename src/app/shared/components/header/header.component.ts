import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CartIconService } from 'src/app/modules/common/service/cart-icon.service';
import { JwtService } from 'src/app/modules/common/service/jwt.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  cartProductCounter = "";

  isLoggedIn = false;

  constructor(private cookieService: CookieService, private headerService: HeaderService, 
    private cartIconService: CartIconService, private jwtService: JwtService){

  }
  ngOnInit(): void {

    this.isLoggedIn = this.jwtService.isLoggedIn();

    this.getCountProduct();
    this.cartIconService.subject
    .subscribe(counter => this.cartProductCounter = String(counter >0 ? counter: ""));
  }


  getCountProduct(){
        this.headerService.getCountProduct((Number(this.cookieService.get("cartId"))))
        
        
        .subscribe(counter => this.cartProductCounter = String(counter >0 ? counter: ""));

  }




}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee2',
  templateUrl: './coffee2.page.html',
  styleUrls: ['./coffee2.page.scss'],
})
export class Coffee2Page implements OnInit {
  price=13;
  price2=6;
  price3=12;
  price4=14;
  
  total=this.price + this.price2 + this.price3 + this.price4;
  
  subtotal=0;

  constructor() { }

  ngOnInit() {
  }
 onPriceMinus1(){
    this.price-=13;
    if(this.price<0)
      {
        this.price=0
      }
      
   this.total=this.price + this.price2 + this.price3 + this.price4;
  }
  onPriceAdd1(){
    this.price+=13;
    this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinus2(){
    this.price2-=6;
    if(this.price2<0)
      {
        this.price2=0
      }
      this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAdd2(){
    this.price2+=6;
    this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinus3(){
    this.price3-=12;
    if(this.price3<0)
      {
        this.price3=0
      }
      this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAdd3(){
    this.price3+=12;
    this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinus4(){
    this.price4-=14;
    if(this.price4<0)
      {
        this.price4=0
      }
      this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAdd4(){
    this.price4+=14;
    this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
print(){
  window.print();
}
}

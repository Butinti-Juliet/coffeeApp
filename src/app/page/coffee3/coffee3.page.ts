import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee3',
  templateUrl: './coffee3.page.html',
  styleUrls: ['./coffee3.page.scss'],
})
export class Coffee3Page implements OnInit {
  price=16;
  price2=11;
  price3=13;
  price4=21;
  
  total=this.price + this.price2 + this.price3 + this.price4;
  
  subtotal=0;
  constructor() { }

  ngOnInit() {
  }
  onPriceMinus1(){
    this.price-=16;
    if(this.price<0)
      {
        this.price=0
      }
      
   this.total=this.price + this.price2 + this.price3 + this.price4;
  }
  onPriceAdd1(){
    this.price+=16;
    this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinus2(){
    this.price2-=11;
    if(this.price2<0)
      {
        this.price2=0
      }
      this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAdd2(){
    this.price2+=11;
    this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinus3(){
    this.price3-=13;
    if(this.price3<0)
      {
        this.price3=0
      }
      this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAdd3(){
    this.price3+=13;
    this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinus4(){
    this.price4-=21;
    if(this.price4<0)
      {
        this.price4=0
      }
      this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAdd4(){
    this.price4+=21;
    this.total=this.price + this.price2 + this.price3 + this.price4;
  
  }
print(){
  window.print();
}
}

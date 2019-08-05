import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.page.html',
  styleUrls: ['./coffee.page.scss'],
})
export class CoffeePage implements OnInit {

price1=6;
price2=8;
price3=14;
price4=10;
total=this.price1 + this.price2 + this.price3 + this.price4;
subtotal=0;

  constructor() { 

  }
onPriceMinus1(){
  this.price1-=6;
  if(this.price1<0)
    {
      this.price1=0
    }
    
 this.total=this.price1 + this.price2 + this.price3 + this.price4;
}
onPriceAdd1(){
  this.price1+=6;
  this.total=this.price1 + this.price2 + this.price3 + this.price4;

}
onPriceMinus2(){
  this.price2-=8;
  if(this.price2<0)
    {
      this.price2=0
    }
    this.total=this.price1 + this.price2 + this.price3 + this.price4;

}
onPriceAdd2(){
  this.price2+=8;
  this.total=this.price1 + this.price2 + this.price3 + this.price4;

}
onPriceMinus3(){
  this.price3-=14;
  if(this.price3<0)
    {
      this.price3=0
    }
    this.total=this.price1 + this.price2 + this.price3 + this.price4;

}
onPriceAdd3(){
  this.price3+=14;
  this.total=this.price1 + this.price2 + this.price3 + this.price4;

}
onPriceMinus4(){
  this.price4-=10;
  if(this.price4<0)
    {
      this.price4=0
    }
    this.total=this.price1 + this.price2 + this.price3 + this.price4;

}
onPriceAdd4(){
  this.price4+=10;
  this.total=this.price1 + this.price2 + this.price3 + this.price4;

}
print(){
  window.print();
}
  ngOnInit() {
  }

}

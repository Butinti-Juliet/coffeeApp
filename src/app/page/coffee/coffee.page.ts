import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.page.html',
  styleUrls: ['./coffee.page.scss'],
})
export class CoffeePage implements OnInit {

price1=0;
price2=0;
price3=0;
price4=0;
price=13;
total=this.price + this.price1 + this.price2 + this.price3 + this.price4;

Q1=0;
Q2=0;
Q3=0;
Q4=0;

  constructor() { 

  }
onPriceMinusBtn1(){
  this.Q1-=1;
  this.price1-=6;
  if(this.price1<0)
    {
      this.price1=0
    }
    
 this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;
}
onPriceAddBtn1(){
  this.Q1+=1;
  this.price1+=6;
  this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;

}
onPriceMinusBtn2(){
  this.Q2-=1;
  this.price2-=8;
  if(this.price2<0)
    {
      this.price2=0
    }
    this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;

}
onPriceAddBtn2(){
  this.Q2+=1;
  this.price2+=8;
  this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;

}
onPriceMinusBtn3(){
  this.Q3-=1;
  this.price3-=14;
  if(this.price3<0)
    {
      this.price3=0
    }
    this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;

}
onPriceAddBtn3(){
  this.Q3+=1;
  this.price3+=14;
  this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;

}
onPriceMinusBtn4(){
  this.Q4-=1;
  this.price4-=10;
  if(this.price4<0)
    {
      this.price4=0
    }
    this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;

}
onPriceAddBtn4(){
  this.Q4+=1;
  this.price4+=10;
  this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;

}
print(){
  window.print();
}
  ngOnInit() {
  }

}

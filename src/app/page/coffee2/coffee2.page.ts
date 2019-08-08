import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee2',
  templateUrl: './coffee2.page.html',
  styleUrls: ['./coffee2.page.scss'],
})
export class Coffee2Page implements OnInit {
  price1=0;
  price2=0;
  price3=0;
  price4=0;
  price=11;
  
  Q1=0;
  Q2=0;
  Q3=0;
  Q4=0;

  total=this.price + this.price1 + this.price2 + this.price3 + this.price4;
  
  subtotal=0;

  constructor() { }

  ngOnInit() {
  }
 onPriceMinusBtn1(){
  this.Q1-=1;
    this.price1-=13;
    if(this.price1<0)
      {
        this.price1=0
      }
      
   this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;
  }
  onPriceAddBtn1(){
    this.Q1+=1;
    this.price1+=13;
    this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinusBtn2(){
    this.Q2-=1;
    this.price2-=6;
    if(this.price2<0)
      {
        this.price2=0
      }
      this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAddBtn2(){
    this.Q2+=1;
    this.price2+=6;
    this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinusBtn3(){
    this.Q3-=1;
    this.price3-=12;
    if(this.price3<0)
      {
        this.price3=0
      }
      this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAddBtn3(){
    this.Q3+=1;
    this.price3+=12;
    this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinusBtn4(){
    this.Q4-=1;
    this.price4-=14;
    if(this.price4<0)
      {
        this.price4=0
      }
      this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAddBtn4(){
    this.Q4+=1;
    this.price4+=14;
    this.total=this.price + this.price1 + this.price2 + this.price3 + this.price4;
  
  }
print(){
  window.print();
}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee1',
  templateUrl: './coffee1.page.html',
  styleUrls: ['./coffee1.page.scss'],
})
export class Coffee1Page implements OnInit {
   
price1=6;
price2=8;
price3=14;
price4=11;

total=this.price1 + this.price2 + this.price3 + this.price4;

subtotal=0;

  constructor() { }

  onPriceMinusBtn1(){
    this.price1-=6;
    if(this.price1<0)
      {
        this.price1=0
      }
      
   this.total=this.price1 + this.price2 + this.price3 + this.price4;
  }
  onPriceAddBtn1(){
    this.price1+=6;
    this.total=this.price1 + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinusBtn2(){
    this.price2-=8;
    if(this.price2<0)
      {
        this.price2=0
      }
      this.total=this.price1 + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAddBtn2(){
    this.price2+=8;
    this.total=this.price1 + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinusBtn3(){
    this.price3-=14;
    if(this.price3<0)
      {
        this.price3=0
      }
      this.total=this.price1 + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAddBtn3(){
    this.price3+=14;
    this.total=this.price1 + this.price2 + this.price3 + this.price4;
  
  }
  onPriceMinusBtn4(){
    this.price4-=11;
    if(this.price4<0)
      {
        this.price4=0
      }
      this.total=this.price1 + this.price2 + this.price3 + this.price4;
  
  }
  onPriceAddBtn4(){
    this.price4+=11;
    this.total=this.price1 + this.price2 + this.price3 + this.price4;
  
  }
print(){
  window.print();
}
  ngOnInit() {
  }

}

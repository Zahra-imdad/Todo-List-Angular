import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements OnInit {
  @Input() checkCompleted: boolean=false
  constructor(private el:ElementRef) {
    this.el.nativeElement.title =this.checkCompleted 
    this.addStrikeThrough()
  }
  ngOnInit() {
    console.log('tooltip initalized');
  }
  addStrikeThrough(){
    //this.el.nativeElement.querySelector('h6').style.textDecoration = 'line-thorugh'
   
  }
}

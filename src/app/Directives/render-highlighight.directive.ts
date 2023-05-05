import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighlighight]'
})
export class RenderHighlighightDirective implements OnInit {

  @Input() defaultColor: string='white'
  @Input() highlightColor: string='green'
  @Input() selectColor: string='yellow'

  constructor(private element:ElementRef ,private renderer: Renderer2  ) { }

  @HostBinding('style.backgroundColor')  color:string='';
  
  ngOnInit(): void {
    this.color=this.defaultColor
  //  this.renderer.setStyle(this.element.nativeElement,'background-color','green',)
  //  this.renderer.setStyle(this.element.nativeElement,'color','white',)
  }



  @HostListener('mouseenter') onmouseover(event:Event){
    this.color=this.highlightColor
    // this.renderer.setStyle(this.element.nativeElement,'background-color','green',)
    this.renderer.setStyle(this.element.nativeElement,'color','white',)
  }


  @HostListener('mouseleave') onmouceleave(event:Event){
    this.color=this.defaultColor
    // this.renderer.setStyle(this.element.nativeElement,'background-color','white',)
    this.renderer.setStyle(this.element.nativeElement,'color','black',)
  }

  @HostListener('click') onclick(event:Event){
    this.color= this.selectColor
    // this.renderer.setStyle(this.element.nativeElement,'background-color','yellow',)
    this.renderer.setStyle(this.element.nativeElement,'color','black',)
  }




}
        
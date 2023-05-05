import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, interval,Observer, map, filter  } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit,OnDestroy  {

   intervalSusbscription!:Subscription;
  constructor (private  router:ActivatedRoute  ){
    
  }          


  ngOnInit(): void {                                                                                                             
      this.router.data.subscribe((data)=>{
        console.log(data)
      })

    //   this.intervalSusbscription= interval(1000).subscribe(count=>{
    //   console.log(count);
    //  })



     let customeObservabl= Observable.create((observer: any) => {
      let count=0;
      setInterval(()=>{
        observer.next(count+"")
        if(count>3){
          observer.error('count is greater than 3');
          
        }

        if(count>2){
          observer.complete();
          
        }
        count++;
      },1000)
     }
     );


     this.intervalSusbscription= customeObservabl.pipe( filter((data:number) => data>0 ),map(data=>{return 'count is'+data})).subscribe((data:any)=>{
      console.log(data)
     },(error:any)=>{
      console.log(error)
     },()=>{
       console.log('complete observable')
     })

  }



  ngOnDestroy(): void {
    this.intervalSusbscription.unsubscribe()
  }

         

}

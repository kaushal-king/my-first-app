import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-router',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserrouterComponent implements OnInit {

  user!: { id: string; name: String; };

  constructor(private router:Router,private ActivatedRoute:ActivatedRoute){}


  ngOnInit(): void {

    this.user={
      id:this.ActivatedRoute.snapshot.params['id'],
      name:this.ActivatedRoute.snapshot.params['name'],

    }

    this.ActivatedRoute.params.subscribe((data:Params)=>{
      this.user={
        id:data['id'],
        name:data['name'],
  
      }
    })

    this.ActivatedRoute.queryParams.subscribe((data:Params)=>{
      console.log(data) 
    })

    this.ActivatedRoute.fragment.subscribe(data=>{
      console.log(data) 
    })



  }

  onCategoryclick(){
      //perform some logic and move to category page

      // this.router.navigateByUrl("/category")

      this.router.navigate(["/category"])
    }

    
    onDetailsclick(){
    //perform some logic and move to category page

    // this.router.navigateByUrl("/category")

    this.router.navigate(["/users",2,'rama'],
                        {queryParams:{page:1,search:'rama'},
                        fragment:'loadj'})
 


  }



  onEdituser(){
    this.router.navigate(["/users",this.user.id,this.user.name,'edit'],
    {
      queryParamsHandling:'preserve'
    }
    )
  }

                                                                  
}

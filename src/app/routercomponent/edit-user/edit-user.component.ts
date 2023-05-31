import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDeactivateGuard } from 'src/app/services/guards/deactivate-guard.services';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],

})
export class EditUserComponent  implements IDeactivateGuard , OnInit {

  user! : { id: string; name: string; } ;
  editUserDetails!: { id: string; name: string; } ;

  constructor( private route:ActivatedRoute  ){}
  ngOnInit(): void {
    
      // this.route.params.subscribe((data)=>{
      //   this.user={
      //     id:data['id'],
      //     name:data['name']
      //   };

      //   this.editUserDetails={...this.user};
      // })

      this.route.data.subscribe((data)=>{
        console.log(data)
        this.user={
          id:data['user']['id'],
          name:data['user']['name']
        };
        this.editUserDetails={...this.user};
      })


  }

  canExit(){
    console.log(this.user);
    console.log(this.editUserDetails);

    if(this.editUserDetails.id!== this.user.id || this.editUserDetails.name !== this.user.name){
      if(confirm('all change is lost if you press ok')){
        return true;
      }else
      return false;
    }else{
      return true;
    }


    
  }

}

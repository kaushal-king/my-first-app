import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fillter-pipes',
  templateUrl: './fillter-pipes.component.html',
  styleUrls: ['./fillter-pipes.component.css']
})


export class FillterPipesComponent implements OnInit {


  appStatus=new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('user data is received')
    }, 2000);
  })


  filterstring=''
  users=[
    {
    name:'kaushal',
    joindate:new Date(15,2,2016)
     },
     {
      name:'priyansh',
      joindate:new Date(15,2,2019)
       },
       {
        name:'vatsal',
        joindate:new Date(15,2,2020)
         },
]


ngOnInit(): void {
  
}   

onAddUSer(){
  this.users.push({
    name:'sample',
    joindate:new Date(15,2,2023)

  })
}

}

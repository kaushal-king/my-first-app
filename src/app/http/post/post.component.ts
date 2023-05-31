import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Post } from './post.model';
import { PostService } from 'src/app/services/post.services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  postForm!:FormGroup;
  posts!: Post[];
  error=null;

  constructor(private postservice:PostService ){}


  ngOnInit(): void {
    this.postForm=new FormGroup({
      title:new FormControl(null,Validators.required),
      content:new FormControl(null,Validators.required),
    })

    this.getPosts();
   
  }

  getPosts(){
    this.postservice.fetchPosts().subscribe((response)=>{
      console.log(response)
      this.posts=response
    },(error)=>{
      console.log(error)
      this.error=error.message
    })
  }

  onCreatePost(){

    const postData=this.postForm.value;

    this.postservice.createPosts(postData).subscribe((responce)=>{
      console.log(responce)
      this.postForm.reset()
         this.getPosts();
    },(error)=>{
      console.log(error)
      this.error=error.message
    })                                  



  }


  onClearPost(event:Event){
      event.preventDefault();
      this.postservice.onClearPost().subscribe((responce)=>{
      console.log(responce)
      this.postForm.reset()
         this.getPosts();
      }) 
  }
  

}

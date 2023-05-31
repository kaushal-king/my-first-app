import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../http/post/post.model";
import { map, tap } from "rxjs";



@Injectable({providedIn:'root'})
export class PostService{

    constructor(private http:HttpClient){

    }


    fetchPosts(){

        let searchParam=new HttpParams();
        searchParam=searchParam.append('custome','kaushal');
        searchParam=searchParam.append('hey','hey');

        return this.http.get< {[key:string]:Post}> ('https://testangular-73e71-default-rtdb.firebaseio.com/posts.json',{headers:new HttpHeaders({
            'customeheader':'kaushal'
        }),
        params:searchParam 
    }).pipe(map((responce )=>{
            let post:Post[]=[];
      
            for(let key in responce){
              post.push({...responce[key],key})
            }
      
            return post;
          }))
    }

    createPosts(postData:Post){
        

        return this.http.post<{name:string}>('https://testangular-73e71-default-rtdb.firebaseio.com/posts.json',postData,{headers:new HttpHeaders({
            'customeheader':'kaushal'
        }),
      observe:'response'
    });
    
    }


    onClearPost(){
        return this.http.delete('https://testangular-73e71-default-rtdb.firebaseio.com/posts.json',{
            observe:'events',
            // responseType:'text'
        }).pipe(tap(e=>{
            if(e.type=== HttpEventType.Sent ){
                console.log('request sent')
            }
            if(e.type=== HttpEventType.Response ){
                console.log(e)
            }
            // console.log(e);
            
        }));
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Http:HttpClient) { }

  poststudent(data:any){
    return this.Http.post<any>("http://localhost:3000/posts/",data).pipe(
      map(
        (res =>{
          return res
        })
      )

    )

  }
  getstudent(){
    return this.Http.get<any>("http://localhost:3000/posts").pipe(
      map(
        (res =>{
          return res
        })
      )

    )

  }
  putstudent(data:any, id:number){
    return this.Http.put<any>("http://localhost:3000/posts/"+id, data).pipe(
      map(
        (res =>{
          return res
        })
      )

    )

  }
  deletestudent(id:number){
    return this.Http.delete<any>("http://localhost:3000/posts/"+id).pipe(
      map(
        (res =>{
          return res

        })
      )

    )

  }
 
 
  
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { ApiService } from '../api.service';
import { studentmodel } from './student.module';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent {
[x: string]: any;
  studentlist:any = []
  studentobj : studentmodel = new studentmodel;
  student :FormGroup=  new FormGroup({
    name: new FormControl(),
    class: new FormControl(),
    email : new FormControl(),
    password: new FormControl()
  })

  constructor(private api:ApiService  ){}
  ngOninit(): void {

  }
  Addstudent(){
  this.studentobj.name = this.student.value.name;
  this.studentobj.class = this.student.value.class;
  this.studentobj.email = this.student.value.email;
  this.studentobj.password= this.student.value.password;
  this.api.poststudent(this.studentobj).subscribe({next : (v) => {
    console.log(v);
  },
  error: (e) => {
    console.log(e)
   
  },
  complete:() => {
    console.log("Student Record Updated!")
    alert("Student Record Updated")
   
  }
   
  })
  }
  getstudent(){
    this.api.getstudent().subscribe(res => {
   this.studentlist = res;
    })
  }

  }


  


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
  studentvalue: FormGroup =new FormGroup({
    name: new FormControl(),
    class: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  })
  studentobj:studentmodel = new studentmodel;
  studentList:any
  constructor( private formbuilder:FormBuilder, private api:ApiService ){}
  ngOninit(): void {

  }
  addstudent(){
this.studentobj.name = this.studentvalue.value.name;
this.studentobj.class = this.studentvalue.value.class;
this.studentobj.email = this.studentvalue.value.email;
this.studentobj.password = this.studentvalue.value.password;

this.api.poststudent(this.studentobj).subscribe({next: (r) =>{
  console.log(r)
} ,
error:(e) => {
  console.log(e)
  alert('Error')
},
complete : () => {
  alert("student Reocrd Added")
  this.getstudet;
  this.studentvalue.reset();
}


})


  }
  getstudet(){
    this.api.getstudent().subscribe(res => {
      this.studentList
    })
  }
  
}

import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private index:IndexService,private fb:FormBuilder) { }
  emplist=[];
  empform:FormGroup;
  ngOnInit() {
    this.empform=this.fb.group({
  'username':[],
  'password':[],
  'email':[],
  'id':[]
    })
    this.getempdata();
  }
 getempdata(){
   this.index.getdata().subscribe(res=>{
     this.emplist=res;
     console.log(this.emplist);
   })
 }
 savedata(data){
   console.log(data);
   this.index.saveemp(data).subscribe(res=>{
     this.emplist=res;
     this.getempdata();
     this.empform.reset();
   })
 }
 deldata(emp){
   this.index.delemp(emp.id).subscribe(res=>{
     this.getempdata();
   })
 }
 editemp(emp){
   this.empform.patchValue({
     'username':emp.username,
     'password':emp.password,
     'email':emp.email,
     'id':emp.id
   })
  }
   updatedata(){
   this.index.update(this.empform.value).subscribe(res=>{
     console.log(res);
     this.getempdata();
     this.empform.reset();
   })
 }
}

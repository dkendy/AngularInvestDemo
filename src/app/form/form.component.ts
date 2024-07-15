import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InvestimentParameters } from '../Services/model'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})



export class FormComponent { 
  @Output() select = new EventEmitter();
 
  parameter: InvestimentParameters =
  { 
    initial : 0, 
    annual: 0, 
    expected : 0, 
    duration : 0
  };

 onSubmit(){

}

}

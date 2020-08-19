import { Component, OnInit } from '@angular/core';
import { BicycleService } from 'src/app/services/bicycle.service';
import { Bicycle } from 'src/app/models/bicycle';
import { BicycleType } from 'src/app/models/bicycle-type';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-new-rent',
  templateUrl: './new-rent.component.html',
  styleUrls: ['./new-rent.component.scss']
})
export class NewRentComponent implements OnInit {
  bicycle: Bicycle = new Bicycle;
  bicycleTypes: BicycleType[];
  createForm: FormGroup;
  invalidFormData: boolean = true;

  constructor(private bicycleService: BicycleService, private appComp: AppComponent) { }

  ngOnInit() {
    this.getBicyclesTypes();

    this.createForm = new FormGroup({
      name: new FormControl("", Validators.required),
      type: new FormControl("", Validators.required),
      price: new FormControl("", [Validators.required, Validators.pattern(/^\d+\.\d{1,2}$/)])
    })
  }

  getBicyclesTypes(){
    this.bicycleService.getTypes().subscribe(data => {
      this.bicycleTypes = data;
    });
  }

  createBicycle(){debugger;
    this.bicycle.name = this.createForm.controls["name"].value;
    this.bicycle.price = +this.createForm.controls["price"].value;
    this.bicycle.typeId = this.createForm.controls["type"].value;

    this.bicycleService.create(this.bicycle).subscribe(data => {
      this.bicycle = data;
      this.bicycle.type = this.bicycleTypes.find(x => x.id == data.typeId);
      this.appComp.availableBicycles.push(this.bicycle);
    });
  }

  isFormDataValid(): boolean{
    if(!this.createForm.invalid){
      this.invalidFormData=false;
    }
    else{
      this.invalidFormData=true;
    }

    return this.invalidFormData;
  }
}

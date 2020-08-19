import { Component, OnInit } from '@angular/core';
import { BicycleService } from './services/bicycle.service';
import { Bicycle } from './models/bicycle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  availableBicycles: Bicycle[] = [];
  rentedBicycles: Bicycle[] = [];

  constructor(private bicycleService: BicycleService) { }


  ngOnInit(){
    this.getRentedBicycle();
    this.getAvailableBicycle();
  }

  getAvailableBicycle(){
    this.bicycleService.getAvailable().subscribe(data => {
      this.availableBicycles = data;
    });
  }

  getRentedBicycle(){
    this.bicycleService.getRented().subscribe(data => {
      this.rentedBicycles = data;
    });
  }

  getTotal(): string{
    var total = this.rentedBicycles.reduce((sum, current) => {
      return sum + current.price; 
    }, 0)
    return total.toFixed(2);
  }

  updateArrays(bicycle: Bicycle){
    if(bicycle.rentalStatus === true){
      let idx = this.rentedBicycles.indexOf(bicycle);
      this.rentedBicycles.splice(idx,1);
      this.availableBicycles.push(bicycle);
    }
    else{
      let idx = this.availableBicycles.indexOf(bicycle);
      this.availableBicycles.splice(idx,1);
      this.rentedBicycles.push(bicycle);
    }
  }

  deleteBicycle(bicycle: Bicycle){
    let idx = this.availableBicycles.indexOf(bicycle);
    this.availableBicycles.splice(idx,1);
  }
}

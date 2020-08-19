import { Component, OnInit, Input } from '@angular/core';
import { BicycleService } from 'src/app/services/bicycle.service';
import { Bicycle } from 'src/app/models/bicycle';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-bicycle-item',
  templateUrl: './bicycle-item.component.html',
  styleUrls: ['./bicycle-item.component.scss']
})
export class BicycleItemComponent implements OnInit {

  @Input() bicycle: Bicycle;
  
  constructor(private bicycleService: BicycleService, private appComp: AppComponent) { }

  ngOnInit() {
  }

  deleteBicycle(){
    this.appComp.deleteBicycle(this.bicycle);
    this.bicycleService.delete(this.bicycle.id).subscribe();
  }

  updateRentStatus(){debugger;
    this.bicycle.rentalStatus = !this.bicycle.rentalStatus;
    this.appComp.updateArrays(this.bicycle);

    this.bicycleService.update(this.bicycle).subscribe();
  }
}

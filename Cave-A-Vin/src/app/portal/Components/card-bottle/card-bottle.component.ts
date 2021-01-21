import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bottle } from 'src/app/interface/bottle';
import { BottleService } from '../../Services/bottle.service';

@Component({
  selector: 'app-card-bottle',
  templateUrl: './card-bottle.component.html',
  styleUrls: ['./card-bottle.component.css']
})
export class CardBottleComponent implements OnInit {
  sanitizer: any;
  
  constructor(private http: HttpClient, public _bottleService:BottleService) { }

  ngOnInit(): void {
  }

  @Input() bottle: Bottle = {} as Bottle;
  @Output() refreshListAfterDelete = new EventEmitter<boolean>();

  onDeleteBottle(): void
  {
    this._bottleService.deleteBottle(this.bottle.Id).subscribe(
      (
        () => {
          this.refreshListAfterDelete.emit(true);
        }
      )
    );
    
  }


  // imageByForce(): string
  // {
  //   if(this.bottle.Strength >=5){
  //     return "../../../../assets/images/fort.jfif";
  //   }else{
  //     return "../../../../assets/images/gros.jfif"
  //   }
  // }

}

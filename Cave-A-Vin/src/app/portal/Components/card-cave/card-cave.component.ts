import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cave } from 'src/app/interface/cave';
import { CaveService } from '../../Services/cave.service';

@Component({
  selector: 'app-card-cave',
  templateUrl: './card-cave.component.html',
  styleUrls: ['./card-cave.component.css']
})
export class CardCaveComponent implements OnInit {
  sanitizer: any;

  constructor(private http: HttpClient, public _caveService:CaveService) { }

  ngOnInit(): void {
  }

  @Input() cave: Cave = {} as Cave;
  @Output() refreshListAfterDelete = new EventEmitter<boolean>();

  onDeleteCave(): void
  {
    this._caveService.deleteCave(this.cave.Id).subscribe(
      (
        () => {
          this.refreshListAfterDelete.emit(true);
        }
      )
    );

  }

}

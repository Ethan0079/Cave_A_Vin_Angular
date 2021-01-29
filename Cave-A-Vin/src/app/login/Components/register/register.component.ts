import { Component, OnInit } from '@angular/core';
import { IRegister } from 'src/app/iregister';
import { UserService } from 'src/app/portal/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: IRegister;

  constructor(private _service: UserService)
  {
    this.user = {} as IRegister;
  }

  ngOnInit(): void {
  }

//   Add(): void
//   {
//     this._service.addPost(this.user).subscribe(
      
//     );
//     this.user = {} as IRegister;
//   }

// }

}

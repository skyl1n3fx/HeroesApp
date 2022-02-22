import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [ `
    .container {
      margin: 10px;
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor
  (
    private _router: Router,
    private _authService : AuthService
  )
  { }

    get auth() : Auth{
      return this._authService.auth;
    }

  ngOnInit(): void {
  }

  logout(){
    // Ir al backend
    // un usuario
    this._router.navigate(['./auth']);

  }

}

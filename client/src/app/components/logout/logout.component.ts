import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    localStorage.setItem('token', '');
    localStorage.setItem('username', '');
    this.router.navigateByUrl('/login');
  }

}

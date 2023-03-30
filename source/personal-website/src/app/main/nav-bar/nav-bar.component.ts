import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routeMap } from 'src/environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onHome() {
    this.router.navigate([routeMap.HOME]);
  }
}

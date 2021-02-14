import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  isCollapsed = false;
  title = 'yumeMenuVersion2';
  isMenuRoute() {
    return this.router.url === '/menu';
  }
  isHomeRoute() {
    return this.router.url === '/home';
  }
}

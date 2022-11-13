import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Component({
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css'],
})

export class NavigationComponent {


  constructor() {
  }

  lat = 1.2838;
  lng = 103.8591;
}

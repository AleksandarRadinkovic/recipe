import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
  loadedFeature = 'recipe'
  onNavigate(feature){
    this.loadedFeature = feature;
  }
}

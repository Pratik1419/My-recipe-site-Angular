import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loaedFeature = 'recipe';
  
  onNavigate(feature: string) {
    this.loaedFeature = feature;
  }
  title = 'My-Recipe-Site';
}

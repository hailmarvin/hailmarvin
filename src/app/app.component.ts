import { Component } from '@angular/core';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hailmarvin';
  faTwitter = faTwitter;
  faGithub = faGithub;
  faInstagram = faInstagram;
}

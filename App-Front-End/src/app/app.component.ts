import { Component } from '@angular/core';
import { AuthService } from './shared-folder/services/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private authService:AuthService){}
  title = 'angularApp';

}

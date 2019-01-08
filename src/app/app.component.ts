import { Component } from '@angular/core';
import { List } from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','react','Vue'];
userList = new List ('Rahiman', 'rahiman.php@gmail.com', 9966144294, 'angular', 'morning', true);

}

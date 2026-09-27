import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Selection } from './selection/selection';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Selection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('linked-signal-demo');
}

import { CounterService } from './../../services/counter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter: number;

  constructor(private readonly counterService: CounterService) {
    this.counter = 0;
  }

  increment() {
    this.counterService.increment();
    this.updateCounter();
  }

  decrement() {
    this.counterService.decrement();
    this.updateCounter();
  }

  updateCounter() {
    this.counter = this.counterService.counter;
  }
}

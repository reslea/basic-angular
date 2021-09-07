import { CounterService } from './../../services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-info',
  templateUrl: './counter-info.component.html',
  styleUrls: ['./counter-info.component.scss']
})
export class CounterInfoComponent implements OnInit {

  constructor(readonly counterService: CounterService) { }

  ngOnInit(): void {
  }
}

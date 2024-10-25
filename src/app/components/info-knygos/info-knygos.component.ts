import { Component } from '@angular/core';
import {KnygosService} from '../../services/knygos.service';

@Component({
  selector: 'app-info-knygos',
  standalone: true,
  imports: [],
  templateUrl: './info-knygos.component.html',
  styleUrl: './info-knygos.component.css'
})
export class InfoKnygosComponent {
  public knyguSkaicius;

  public constructor(private knygosService:KnygosService) {
    this.knyguSkaicius = knygosService.knygos.length;

    knygosService.onCountChange.subscribe(
      ()=>{
        this.knyguSkaicius = knygosService.knygos.length;
      }
    )
  }
}

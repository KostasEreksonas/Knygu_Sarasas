import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Knygos } from '../../interfaces/knygos';
import {KnygosService} from '../../services/knygos.service';

@Component({
  selector: 'app-vaizduoti-knygas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vaizduoti-knygas.component.html',
  styleUrl: './vaizduoti-knygas.component.css'
})
export class VaizduotiKnygasComponent {
  public knygos:Knygos[] = [];
  public autorius:String="";
  public pavadinimas:String="";
  public metai:Number=0;

  public constructor(private knygosService:KnygosService) {
    this.knygos = this.knygosService.knygos;
  }

  public pasalinti(i:number) {
    this.knygosService.pasalintiKnyga(i);
  }

  public pasalintiViska() {
    this.knygosService.pasalintiViska();
  }
}

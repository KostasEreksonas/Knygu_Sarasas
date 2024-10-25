import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Knygos } from '../../interfaces/knygos';
import {KnygosService} from '../../services/knygos.service';

@Component({
  selector: 'app-prideti-knygas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prideti-knygas.component.html',
  styleUrl: './prideti-knygas.component.css'
})
export class PridetiKnygasComponent {
  public knygos:Knygos[] = [];
  public autorius:String="";
  public pavadinimas:String="";
  public metai:Number=0;

  public constructor(private knygosService:KnygosService) {
    this.knygos = this.knygosService.knygos;
  }

  public pridetiKnyga() {
    this.knygosService.pridetiKnyga(this.autorius, this.pavadinimas, this.metai);
    this.autorius="";
    this.pavadinimas="";
    this.metai=0;
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PridetiKnygasComponent} from './components/prideti-knygas/prideti-knygas.component';
import {VaizduotiKnygasComponent} from './components/vaizduoti-knygas/vaizduoti-knygas.component';
import {InfoKnygosComponent} from './components/info-knygos/info-knygos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PridetiKnygasComponent, VaizduotiKnygasComponent, InfoKnygosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Knygu_Sarasas';
}

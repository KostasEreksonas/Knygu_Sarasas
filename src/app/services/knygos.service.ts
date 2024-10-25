import { Injectable } from '@angular/core';
import { Knygos } from '../interfaces/knygos';

@Injectable({
  providedIn: 'root'
})
export class KnygosService {
  public knygos:Knygos[] = [];

  constructor() {
    let tmp = localStorage.getItem("knygos");
    if (tmp != null) {
      this.knygos = JSON.parse(tmp);
    }
  }

  private issaugoti() {
    localStorage.setItem("knygos", JSON.stringify(this.knygos));
  }

  public pridetiKnyga(autorius:String, pavadinimas:String, metai:Number) {
    this.knygos.push({
      autorius:autorius,
      pavadinimas:pavadinimas,
      metai:metai
    })
  }

  public pasalintiKnyga(i:number) {
    this.knygos.splice(i,1);
    this.issaugoti();
  }

  public pasalintiViska() {
    this.knygos.length = 0;
    this.issaugoti();
  }
}
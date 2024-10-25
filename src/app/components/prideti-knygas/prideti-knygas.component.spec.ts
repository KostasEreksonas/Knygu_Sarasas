import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PridetiKnygasComponent } from './prideti-knygas.component';

describe('PridetiKnygasComponent', () => {
  let component: PridetiKnygasComponent;
  let fixture: ComponentFixture<PridetiKnygasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PridetiKnygasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PridetiKnygasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

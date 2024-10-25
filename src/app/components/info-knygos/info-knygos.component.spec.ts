import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoKnygosComponent } from './info-knygos.component';

describe('InfoKnygosComponent', () => {
  let component: InfoKnygosComponent;
  let fixture: ComponentFixture<InfoKnygosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoKnygosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoKnygosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

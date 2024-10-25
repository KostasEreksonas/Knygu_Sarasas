import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaizduotiKnygasComponent } from './vaizduoti-knygas.component';

describe('VaizduotiKnygasComponent', () => {
  let component: VaizduotiKnygasComponent;
  let fixture: ComponentFixture<VaizduotiKnygasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaizduotiKnygasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaizduotiKnygasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

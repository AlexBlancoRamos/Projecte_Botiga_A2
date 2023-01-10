import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertesComponent } from './ofertes.component';

describe('OfertesComponent', () => {
  let component: OfertesComponent;
  let fixture: ComponentFixture<OfertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

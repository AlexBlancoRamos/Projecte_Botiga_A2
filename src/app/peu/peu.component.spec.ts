import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeuComponent } from './peu.component';

describe('PeuComponent', () => {
  let component: PeuComponent;
  let fixture: ComponentFixture<PeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

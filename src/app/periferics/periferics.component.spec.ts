import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerifericsComponent } from './periferics.component';

describe('PerifericsComponent', () => {
  let component: PerifericsComponent;
  let fixture: ComponentFixture<PerifericsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerifericsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerifericsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

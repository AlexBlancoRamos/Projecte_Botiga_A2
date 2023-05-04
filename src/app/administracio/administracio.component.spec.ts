import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracioComponent } from './administracio.component';

describe('AdministracioComponent', () => {
  let component: AdministracioComponent;
  let fixture: ComponentFixture<AdministracioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

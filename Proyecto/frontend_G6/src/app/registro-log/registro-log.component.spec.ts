import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLogComponent } from './registro-log.component';

describe('RegistroLogComponent', () => {
  let component: RegistroLogComponent;
  let fixture: ComponentFixture<RegistroLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

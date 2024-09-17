import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc3Component } from './exerc3.component';

describe('Exerc3Component', () => {
  let component: Exerc3Component;
  let fixture: ComponentFixture<Exerc3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exerc3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exerc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

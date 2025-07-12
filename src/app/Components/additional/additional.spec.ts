import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Additional } from './additional';

describe('Additional', () => {
  let component: Additional;
  let fixture: ComponentFixture<Additional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Additional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Additional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

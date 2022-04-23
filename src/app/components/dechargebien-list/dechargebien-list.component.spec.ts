import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DechargebienListComponent } from './dechargebien-list.component';

describe('DechargebienListComponent', () => {
  let component: DechargebienListComponent;
  let fixture: ComponentFixture<DechargebienListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DechargebienListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DechargebienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnListComponent } from './sn-list.component';

describe('SnListComponent', () => {
  let component: SnListComponent;
  let fixture: ComponentFixture<SnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

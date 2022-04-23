import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DechargesnListeComponent } from './dechargesn-liste.component';

describe('DechargesnListeComponent', () => {
  let component: DechargesnListeComponent;
  let fixture: ComponentFixture<DechargesnListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DechargesnListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DechargesnListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

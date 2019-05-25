import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CegvezetoComponent } from './cegvezeto.component';

describe('CegvezetoComponent', () => {
  let component: CegvezetoComponent;
  let fixture: ComponentFixture<CegvezetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CegvezetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CegvezetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

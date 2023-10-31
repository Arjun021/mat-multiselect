import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2MatMultiselectComponent } from './ng2-mat-multiselect.component';

describe('Ng2MatMultiselectComponent', () => {
  let component: Ng2MatMultiselectComponent;
  let fixture: ComponentFixture<Ng2MatMultiselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ng2MatMultiselectComponent]
    });
    fixture = TestBed.createComponent(Ng2MatMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

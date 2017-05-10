import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecompanyComponent } from './createcompany.component';

describe('CreatecompanyComponent', () => {
  let component: CreatecompanyComponent;
  let fixture: ComponentFixture<CreatecompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

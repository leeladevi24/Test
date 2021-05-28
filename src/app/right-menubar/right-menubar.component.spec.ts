import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMenubarComponent } from './right-menubar.component';

describe('RightMenubarComponent', () => {
  let component: RightMenubarComponent;
  let fixture: ComponentFixture<RightMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightMenubarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingHomeComponent } from './trending-home.component';

describe('TrendingHomeComponent', () => {
  let component: TrendingHomeComponent;
  let fixture: ComponentFixture<TrendingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

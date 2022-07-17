import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTvComponent } from './trending-tv.component';

describe('TrendingTvComponent', () => {
  let component: TrendingTvComponent;
  let fixture: ComponentFixture<TrendingTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

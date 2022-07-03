import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingFavouriteComponent } from './trending-favourite.component';

describe('TrendingFavouriteComponent', () => {
  let component: TrendingFavouriteComponent;
  let fixture: ComponentFixture<TrendingFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingFavouriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

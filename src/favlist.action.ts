import { createAction ,props } from '@ngrx/store';


export const addToFavList = createAction('[FavList Component] addToFavlist' , props<{data:any}>());
export const removeFromFavList = createAction('[FavList Component] removeFromFavList' , props<{data:number}>());
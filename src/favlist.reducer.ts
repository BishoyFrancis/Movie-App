import { createReducer, on } from '@ngrx/store';
import { addToFavList , removeFromFavList } from './favlist.action';


export const initialState:any = {
    movies:[],
    people: [],
}

export const favListReducer = createReducer(
    initialState,
    on(addToFavList,(state,{data}) => ({...state , movies:[...state.movies , data]})),
    on(removeFromFavList , (state , {data}) => ({...state,movies:state.movies.filter((item:any)=>item.id!==data)}))
)




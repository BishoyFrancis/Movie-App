import { MovieDetails } from './movie-details';
export interface PersonDetails {
    adult: boolean;
    gender: number;
    id: number;
    known_for: MovieDetails[];
    known_for_department: string;
    media_type: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
}

import React from 'react';
import Image from '../node_modules/next/image';
import { Movie } from '../types';
import { baseUrl } from '../utils/request';
interface Props {
  movie: Movie;
  key: number;
}
const MovieCard = ({ movie, key }: Props) => {
  return (
    <div className=" relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.poster_path || movie.backdrop_path
        }`}
        alt={movie.title}
        key={key}
        layout="fill"
        className="object-cover rounded-sm shadow-lg md:rounded"
      />
    </div>
  );
};

export default MovieCard;

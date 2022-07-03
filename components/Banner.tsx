import { useEffect, useState } from 'react';
import Image from '../node_modules/next/image';
import { Movie } from '../types';
import { baseUrl } from '../utils/request';

interface props {
  NetflixOriginals: Movie[];
} // get random number

const Banner = ({ NetflixOriginals }: props) => {
  console.log(NetflixOriginals);
  const [movie, setmovie] = useState<Movie | null>(null);
  useEffect(() => {
    setmovie(
      NetflixOriginals[Math.floor(Math.random() * NetflixOriginals.length)]
    );
  }, [NetflixOriginals]);
  return (
    <div className="flex flex-col  px-5 py-16 h-[65vh] lg:justify-end ">
      <div className=" absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.poster_path}
      </h1>
      <p className="text-white shadow-sm lg:max-w-lg ">{movie?.overview}</p>
      <div className="flex justify-center">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Watch now
        </button>
      </div>
      {/* <div className="text-white columns-2 hover:columns-3">
        <p>kdkd</p>
        <p>kdkd</p>
        <p>lkkks</p>
      </div> */}
    </div>
  );
};

export default Banner;

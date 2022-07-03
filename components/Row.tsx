import { useRef, useState } from 'react';
import { Movie } from '../types';
import MovieCard from './MovieCard';
//@ts-ignore
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
interface props {
  title: string;
  movies: Movie[];
}
const Row = ({ title, movies }: props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [ismoved, setIsMoved] = useState(false);
  const handleClick = (direction: string) => {
    setIsMoved(false);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollto =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollto, behavior: 'smooth' });
    }
    // if (rowRef.current) {
    //   const { scrollLeft } = rowRef.current;
    //   if (direction === 'left') {
    //     rowRef.current.scrollLeft = scrollLeft - 240;
    //   } else {
    //     rowRef.current.scrollLeft = scrollLeft + 240;
    //   }
    // }

    //   rowRef.current.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start',
    //   });
    // }
  };
  return (
    <div className="space-y-1 transition duration-200 h-50 md:space-y-2">
      <h2 className="pt-1 pl-4 text-2xl font-bold text-blue-800 cursor-pointer ">
        {title}
      </h2>
      <div className="relative md:-ml-2 group">
        <AiOutlineDoubleLeft
          className={`absolute top-0 bottom-0 z-20 m-auto transition opacity-0 cursor-pointer h-9 w-9 hover:scale-125 group-hover:opacity-100 left-2 ${
            ismoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />
        <div
          className=" flex items-center space-x-.5 overflow-x-scroll  scrollbar-hide md:space-x-2.5 md:p-2"
          ref={rowRef}
        >
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
        <AiOutlineDoubleRight
          className={`absolute top-0 bottom-0 z-20 m-auto transition opacity-0 cursor-pointer h-9 w-9 hover:scale-125 group-hover:opacity-100 right-2 ${
            ismoved && 'hidden'
          }`}
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};

export default Row;

// @ts-ignore
import Head from 'next/head';
// @ts-ignore
import type { NextPage } from 'next';
import Header from '../components/Header';
import requests from '../utils/request';
import Banner from '../components/Banner';
import { Movie } from '../types';
interface props {
  NetflixOriginals: Movie[];
  Trending: Movie[];
  TopRated: Movie[];
  ActionMovies: Movie[];
  ComedyMovies: Movie[];
  HorrorMovies: Movie[];
  RomanceMovies: Movie[];
  Documentaries: Movie[];
}
const Home: NextPage = ({
  NetflixOriginals,
  Trending,
  TopRated,
  ActionMovies,
  ComedyMovies,
  HorrorMovies,
  RomanceMovies,
  Documentaries,
}: props) => {
  return (
    <div className="relative  bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title> netflix </title>{' '}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner NetflixOriginals={NetflixOriginals} />
        {/* row */}
        {/* row */}
        {/* row */}
        {/* row */}
        {/* row */}
        {/* row */}
      </main>
      {/* modal */}
    </div>
  );
};
export default Home;

export const getServerSideProps = async () => {
  const [
    NetflixOriginals,
    Trending,
    TopRated,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);
  return {
    props: {
      NetflixOriginals: NetflixOriginals.results,
      Trending: Trending.results,
      TopRated: TopRated.results,
      ActionMovies: ActionMovies.results,
      ComedyMovies: ComedyMovies.results,
      HorrorMovies: HorrorMovies.results,
      RomanceMovies: RomanceMovies.results,
      Documentaries: Documentaries.results,
    },
  };
};

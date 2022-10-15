
import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartQuery();

  if (isFetching) return <Loader title="Loading Top Charts." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3x1 text-white text-left mt-4 mb-10 ">
        Top Artists Around The World
      </h2>
      <div className=" flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => (
          <ArtistCard
            key={track.key}
            track={track}
          />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;

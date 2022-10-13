import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  (isPlaying && activeSong?.tittle === song.tittle ? (
    <FaPauseCircle size={35} onClick={handlePause} color="white" />
  ) : <FaPlayCircle size={35} onClick={handlePlay} color="white" />
  ));

export default PlayPause;

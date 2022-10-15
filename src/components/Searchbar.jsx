import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchWord] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
    >
      <label
        htmlFor="search-field"
        className="sr-only"
      >
        Search all songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          type="search"
          name="search-field"
          id="search-field"
          value={searchTerm}
          placeholder="Search"
          autoComplete="off"
          onChange={(event) => setSearchWord(event.target.value)}
          className="flex-1 flex ml-2 bg-transparent border-none outline-none placeholder:text-gray-500 text-base text-white"
        />
      </div>
    </form>
  );
};

export default Searchbar;

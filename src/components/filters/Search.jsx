import React, { useEffect, useState } from 'react';
import { filterBySearch } from '../../utils/filterUtils';
import { useProductContext } from '../../contexts/contextIndex';
import SearchItemCard from '../Search/SearchItemCard';
import { useLocation, useNavigate } from 'react-router';
import { MagnifyingGlass } from '@phosphor-icons/react';
import LoaderYellow from '../../assets/LoaderYellow.svg';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showList, setShowList] = useState(true);
  const [searching, setSearching] = useState(false);

  const { allProducts, handleApplyFilters } = useProductContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setSearchText(e.target.value);
    if (!showList) {
      setShowList(true);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleApplyFilters('searchText', searchText);
    setShowList(false);
    navigate('/glasses');
  };

  useEffect(() => {
    if (location?.pathname !== "/glasses") {
      setSearchText("");
    }
  }, [location]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilteredProducts(filterBySearch(searchText, allProducts));
      setSearching(false);
      if (location?.pathname === "/glasses" && !searchText) {
        handleApplyFilters("searchText", searchText);
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchText]);

  return (
    <main>
      <form
        onSubmit={handleSearchSubmit}
        className={`flex items-center justify-end bg-black/[0.075] px-3 ${
          searchText && showList
            ? "rounded-t-md"
            : "rounded-full"
        } text-sm transition`}
      >
        <MagnifyingGlass size={16} className="text-black" weight="light" />
        <input
          type="search"
          name="searchText"
          placeholder="Search for your favorite glasses and more"
          value={searchText}
          onChange={handleChange}
          className="w-full py-2 px-3 bg-transparent focus:outline-none"
        />
      </form>
    </main>
  );
};

export default Search;

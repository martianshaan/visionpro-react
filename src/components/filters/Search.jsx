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
    setSearching(true);
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
        className={`flex items-center justify-end bg-black/[0.075] px-3 ${searchText && showList
            ? "rounded-t-md"
            : "rounded-full"
          } text-sm transition`}
      >
        <MagnifyingGlass size={16} className="text-black" weight="light" />
        <input
          type="search"
          name="searchText"
          placeholder="Search for your favourite glasses and more"
          value={searchText}
          onChange={handleChange}
          className="w-full py-2 px-3 bg-transparent focus:outline-none"
        />
      </form>
      {searchText && showList && (
        <ul className="absolute bg-gray-200 w-11/12 sm:w-full max-h-72 overflow-y-scroll rounded-b-lg -z-20 p-2">
          {searching ? (
            <section className="flex items-center justify-center h-1/6 w-1/6 mx-auto">
              <img src={LoaderYellow} alt="Searching..." />
            </section>
          ) : (
            filteredProducts.length ? (
              filteredProducts.map((product) => (
                <li key={product.id} onClick={() => navigate('/glasses/' + product.id)} className="cursor-pointer">
                  <SearchItemCard product={product} />
                </li>
              ))
            ) : (
              <li className="h-10 flex items-center justify-center">
                No glasses match the searched text "{searchText}"
              </li>
            )
          )}
        </ul>
      )}
    </main>
  );
};

export default Search;

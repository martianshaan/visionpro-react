/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import InputRadioForGender from './InputRadioForGender'
import InputRange from './InputRange';
import InputRadio from './InputRadio';
import { checkboxCategories,ratings,gendersList } from '../../utils/constants';

function FilterHeading({ text }) {
  return <h2 className="text-xl mb-3 ml-1">{text}</h2>;
}


function Filters({setIsFilterOpen }) {
  return (
    <aside className="screen filtersContainer fixed left-0 top-0  mt-[72px] flex flex-col p-3 gap-3 overflow-auto">
      <section className="flex justify-between items-center">
        <p className="text-3xl text-gray-800 "> Filter Products</p>
        <AiFillCloseCircle
          className="text-2xl cursor-pointer"
          onClick={() => setIsFilterOpen((prevIsFilterOpen) => !prevIsFilterOpen)}
        />
      </section>
      <h5 className="text-sm text-gray-600 underline cursor-pointer">
        clear
      </h5>
      <section className="py-4">
        <FilterHeading text="Gender" />
        <div className="grid grid-rows-2 gap-4  grid-cols-2 ">
          {gendersList.map((data, index) => (
           <InputRadioForGender key={index} data={data} />
          ))}
        </div>
      </section>

      <section className="py-3">
        <FilterHeading text="Price Range" />
        <InputRange />
      </section>

      <section className="py-3">
        <FilterHeading text="Categories" />
        {checkboxCategories.map((item) => (
          <div className="flex flex-row items-center ">
            <input type="checkbox" id="label" name="category" value="checkbox" className="mr-2" />
            <label htmlFor="label">
              {item}
            </label>

          </div>

        ))}
      </section>

      <section className="py-3 flex flex-col gap-2 mr-2">
        <FilterHeading text="Rating" />
        {ratings.map((data) => (
          <InputRadio data={data} name="rating" />
        ))}

      </section>
    </aside>
  );
}

export default Filters;

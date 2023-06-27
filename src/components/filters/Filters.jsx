/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Checkbox from './Checkbox';
import InputRange from './InputRange';
import InputRadio from './InputRadio';

function FilterHeading({ text }) {
  return <h2 className="text-xl mb-3 ml-1">{text}</h2>;
}
const checkboxCategories = [
  {
    name: 'All Products',
    value: 'all',
  },
  {
    name: 'Vision',
    value: 'vision',
  },
  {
    name: 'Sunglasses',
    value: 'sunglasses',
  },
  {
    name: 'Sports',
    value: 'sports',
  },
];

const ratings = [1, 2, 3, 4];
const categories = ['Vision', 'Sunglasses', 'Sports'];

function Filters() {
  return (
    <aside className="screen filtersContainer fixed left-0 top-0  flex flex-col p-3 gap-3 overflow-auto scrollbar">
      <div className="flex justify-between items-center">
        <div className="text-3xl text-gray-800 "> Filter Products</div>
        <AiFillCloseCircle className="text-2xl" />
      </div>
      <h5 className="text-sm text-gray-600">clear</h5>
      <section className="py-4">
        <FilterHeading text="Gender" />
        <div className="grid grid-rows-2 gap-4  grid-cols-2 gap-2">
          {checkboxCategories.map((item, index) => (
            <Checkbox data={item} index={index} />
          ))}
        </div>
      </section>

      <section className="py-3">
        <FilterHeading text="Price Range" />
        <InputRange />
      </section>

      <section className="py-3">
        <FilterHeading text="Categories" />
        {categories.map((item) => (
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

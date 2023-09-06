import React from 'react'
import { useProductContext } from '../../contexts/contextIndex';

const InputRadioForGender = ({ data }) => {
  const { handleApplyFilters, filters:{gender} }=useProductContext();

  return (
    <label className={`border border-black/[0.1] rounded-sm p-2 shadow-sm text-center capitalize cursor-pointer
    ${ gender === data ? 'bg-[--primary-text-color] text-white ': 'bg-black/[0.1] hover:bg-[--primary-text-color] hover:text-white'
}
    `}>
        {data}
        <input 
        type='radio'
        name="gender"
        value={data}
        className='invisible'
        checked={data===gender}
        onChange={()=> handleApplyFilters('gender', data)}
        />
    </label>
  )
}

export default InputRadioForGender
import React from 'react'

const InputRadioForGender = ({data}) => {
  return (
    <label className={`rouned-md p-2 shadow-sm text-center capitalize cursor-pointer
      ${gender === data ?"bg-[--primart-text-color] text-white":"bg-black/0.5 hover:text-white hover:bg-[--primary-text-color]"}
    `}>
        {data}
        <input 
        type='radio'
        name="gender"
        value={data}
        className='invisible'
        selected={gender===data}
        onChange={()=>{}}
        />
    </label>
  )
}

export default InputRadioForGender
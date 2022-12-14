import React, { useCallback, useRef, useState } from 'react'
import search from '../assets/search.svg'
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import {searchfilter} from '../redux/blog/actionCreator'
const Search = () => {
  const [value, setValue] = useState('')
  const [dbValue, saveToDb] = useState('')
  const dispatch = useDispatch()
  const handleChange = event=>{
    const { value: nextValue } = event.target;
		setValue(nextValue);

    const debounceSave = debounce(()=>saveToDb(nextValue),1000)
    debounceSave()
   dispatch(searchfilter(dbValue))
    
  };
  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        onChange={handleChange}
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
      />
      <img className="inline h-6 cursor-pointer" src={search} alt="Search" />
    </div>
  )
}

export default Search

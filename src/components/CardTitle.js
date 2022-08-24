import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allfilter } from '../redux/blog/actionCreator'

const CardTitle = () => {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.value)
  
  const showAll=(val)=>{
    dispatch(allfilter(val))
    
  }
  return (
    <div className="text-center">
      <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        ALL BLOGS ARE HERE
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
        labore natus atque, ducimus sed.
      </p>
      {value.length === 9 ? (
        ''
      ) : (
        <button
        onClick={()=>showAll(-1)}
        className="cursor-pointer hover:bg-rose-500 inline-flex items-center px-4 py-2  rounded-full text-sm font-medium bg-pink-400 text-white">
          Show All
        </button>
      )}
    </div>
  )
}

export default CardTitle

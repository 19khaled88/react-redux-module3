import React from 'react'
import CardTitle from './CardTitle'
import { useSelector, useDispatch } from 'react-redux'
import {
  categoryfilter,
  authornamefilter,
  authorimagefilter,
} from '../redux/blog/actionCreator'
const Card = () => {
  const card = useSelector((state) => state.value)
  
  const dispatch = useDispatch()
  const categoryHandler = (value) => {
    dispatch(categoryfilter(value))
  }
  const authorHandler = (value) => {
    dispatch(authornamefilter(value))
  }
  const authorImageHandler = (value) => {
    var newStr = value.replace(/^.*\/(?=[^\/]*$)/, '')
    const name = newStr.replace(/\.[^/.]+$/, '')
    dispatch(authorimagefilter(name))
  }
  return (
    <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <CardTitle />
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {card.map((val) => (
            <div
              key={val.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={val?.image}
                  alt={val?.image}
                />
              </div>

              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <button
                      onClick={() => categoryHandler(val.category)}
                      className="cursor-pointer hover:bg-violet-300 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      {val.category}
                    </button>
                  </p>
                  <a href="#" className="block mt-1">
                    <p className="text-xl font-semibold text-gray-900">
                      {val.categoryTitle}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      onClick={() => authorImageHandler(val.authorImage)}
                      className="h-10 w-10 rounded-full cursor-pointer"
                      src={val.authorImage}
                      alt={val.authorImage}
                    />
                  </div>
                  <div className="ml-3">
                    <p
                      onClick={() => authorHandler(val.authorName)}
                      className="cursor-pointer text-sm text-left font-medium text-gray-900 hover:underline"
                    >
                      {val.authorName}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2020-03-16">{val.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span> {val.readTime} </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div
            className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
        >
         
            <div
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
                <div className="flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover"
                        src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                        alt=""
                    />
                </div>

                <div
                    className="flex-1 bg-white p-6 flex flex-col justify-between"
                >
                    <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                            <span
                                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                            >
                                Article
                            </span>
                        </p>
                        <a href="#" className="block mt-1">
                            <p
                                className="text-xl font-semibold text-gray-900"
                            >
                                Boost your conversion rate
                            </p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://avatars.githubusercontent.com/u/73503432?v=4"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <p
                                className="text-sm text-left font-medium text-gray-900 hover:underline"
                            >
                                Learn with sumit
                            </p>
                            <div
                                className="flex space-x-1 text-sm text-gray-500"
                            >
                                <time dateTime="2020-03-16">11 Jul, 2022
                                </time>
                                <span aria-hidden="true">
                                    &middot;
                                </span>
                                <span> 6 min read </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
            <div
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
                <div className="flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover"
                        src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                        alt=""
                    />
                </div>
                <div
                    className="flex-1 bg-white p-6 flex flex-col justify-between"
                >
                    <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                            <span
                                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                            >
                                Article
                            </span>
                        </p>
                        <a href="#" className="block mt-1">
                            <p
                                className="text-xl font-semibold text-gray-900"
                            >
                                How to use search engine optimization to drive sales
                            </p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://avatars.githubusercontent.com/u/73503432?v=4"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <p
                                className="text-sm font-medium text-gray-900 hover:underline"
                            >
                                Learn with sumit
                            </p>
                            <div
                                className="flex space-x-1 text-sm text-gray-500"
                            >
                                <time dateTime="2020-03-16">
                                    08 Feb, 2022
                                </time>
                                <span aria-hidden="true">
                                    &middot;
                                </span>
                                <span> 11 min read </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
            <div
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
                <div className="flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover"
                        src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                        alt=""
                    />
                </div>
                <div
                    className="flex-1 bg-white p-6 flex flex-col justify-between"
                >
                    <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                            <span
                                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                            >
                                Article
                            </span>
                        </p>
                        <a href="#" className="block mt-1">
                            <p
                                className="text-xl font-semibold text-gray-900"
                            >
                                Improve your customer experience
                            </p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://avatars.githubusercontent.com/u/73503432?v=4"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <p
                                className="text-sm font-medium text-gray-900 hover:underline"
                            >
                                Learn with sumit
                            </p>
                            <div
                                className="flex space-x-1 text-sm text-gray-500"
                            >
                                <time dateTime="2020-03-16"
                                    >20 Mar, 2022
                                </time>
                                <span aria-hidden="true">
                                    &middot;
                                </span>
                                <span> 9 min read </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

       
            <div
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
                <div className="flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover"
                        src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                        alt=""
                    />
                </div>

                <div
                    className="flex-1 bg-white p-6 flex flex-col justify-between"
                >
                    <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                            <span
                                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                            >
                                Article
                            </span>
                        </p>
                        <a href="#" className="block mt-1">
                            <p
                                className="text-xl font-semibold text-gray-900"
                            >
                                Boost your conversion rate
                            </p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://avatars.githubusercontent.com/u/73503432?v=4"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <p
                                className="text-sm font-medium text-gray-900 hover:underline"
                            >
                                Learn with sumit
                            </p>
                            <div
                                className="flex space-x-1 text-sm text-gray-500"
                            >
                                <time dateTime="2020-03-16"
                                    >11 Jul, 2022
                                </time>
                                <span aria-hidden="true">
                                    &middot;
                                </span>
                                <span> 6 min read </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
                <div className="flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover"
                        src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                        alt=""
                    />
                </div>
                <div
                    className="flex-1 bg-white p-6 flex flex-col justify-between"
                >
                    <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                            <span
                                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                            >
                                Article
                            </span>
                        </p>
                        <a href="#" className="block mt-1">
                            <p
                                className="text-xl font-semibold text-gray-900"
                            >
                                How to use search engine optimization to drive sales
                            </p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://avatars.githubusercontent.com/u/73503432?v=4"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <p
                                className="text-sm font-medium text-gray-900 hover:underline"
                            >
                                Learn with sumit
                            </p>
                            <div
                                className="flex space-x-1 text-sm text-gray-500"
                            >
                                <time dateTime="2020-03-16">
                                    08 Feb, 2022
                                </time>
                                <span aria-hidden="true">
                                    &middot;
                                </span>
                                <span> 11 min read </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
                <div className="flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover"
                        src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                        alt=""
                    />
                </div>
                <div
                    className="flex-1 bg-white p-6 flex flex-col justify-between"
                >
                    <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                            <span
                                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                            >
                                Article
                            </span>
                        </p>
                        <a href="#" className="block mt-1">
                            <p
                                className="text-xl font-semibold text-gray-900"
                            >
                                Improve your customer experience
                            </p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://avatars.githubusercontent.com/u/73503432?v=4"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <p
                                className="text-sm font-medium text-gray-900 hover:underline"
                            >
                                Learn with sumit
                            </p>
                            <div
                                className="flex space-x-1 text-sm text-gray-500"
                            >
                                <time dateTime="2020-03-16"
                                    >20 Mar, 2022
                                </time>
                                <span aria-hidden="true">
                                    &middot;
                                </span>
                                <span> 9 min read </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
      </div>
    </section>
  )
}

export default Card

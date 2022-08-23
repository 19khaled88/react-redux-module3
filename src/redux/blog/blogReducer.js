import {
  SEARCH,
  AUTHORNAMEFILTER,
  IMAGEFILTER,
  CATEGORYFILTER,
  AUTHORIMAGEFILTER,
} from './actionTypes'

const initialState = {
  value: [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      category: 'Commentary',
      categoryTitle: 'Boost your conversion rate',
      authorImage: './images/Scott S.jpg',
      authorName: 'Scott S',
      date: '11 Jul, 2022',
      readTime: '6 min read',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      category: 'Clinical',
      categoryTitle: 'How to use search engine optimization to drive sales',
      authorImage: './images/Cameron R.jpg',
      authorName: 'Cameron R',
      date: '08 Feb, 2022',
      readTime: '11 min read',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      category: 'Commentary',
      categoryTitle: ' Improve your customer experience',
      authorImage: './images/Bernard A.jpg',
      authorName: 'Bernard A',
      date: '20 Mar, 2022',
      readTime: '9 min read',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      category: 'Freelance',
      categoryTitle: 'Boost your conversion rate',
      authorImage: './images/Lisa B.jpg',
      authorName: 'Lisa B',
      date: '11 Jul, 2022',
      readTime: '6 min read',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      category: 'Feature Writing',
      categoryTitle: 'How to use search engine optimization to drive sales',
      authorImage: './images/Sarah P.jpg',
      authorName: 'Sarah P',
      date: '08 Feb, 2022',
      readTime: '11 min read',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      category: 'Clinical',
      categoryTitle: 'How to use search engine optimization to drive sales',
      authorImage: './images/Mercedes D.jpg',
      authorName: 'Mercedes D',
      date: '08 Feb, 2022',
      readTime: '11 min read',
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      category: 'Investigative',
      categoryTitle: 'Improve your customer experience',
      authorImage: './images/Cameron R.jpg',
      authorName: 'Cameron R',
      date: '20 Mar, 2022',
      readTime: '9 min read',
    },
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      category: 'Freelance',
      categoryTitle: 'Improve your customer experience',
      authorImage: './images/Lisa B.jpg',
      authorName: 'Lisa B',
      date: '20 Mar, 2022',
      readTime: '9 min read',
    },
    {
      id: 9,
      image:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      category: 'Investigative',
      categoryTitle: 'Improve your customer experience',
      authorImage: './images/Sarah P.jpg',
      authorName: 'Sarah P',
      date: '20 Mar, 2022',
      readTime: '9 min read',
    },
  ],
}
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORYFILTER:
      return {
        ...state,
        value: state.value.filter((val) => val.category === action.payload),
      }
    case AUTHORNAMEFILTER:
      return {
        ...state,
        value: state.value.filter((val) => val.authorName === action.payload),
      }
    case AUTHORIMAGEFILTER:
      return {
        ...state,
        value: state.value.filter((val) => val.authorName === action.payload),
      }
    default:
      return state
  }
}

export default blogReducer

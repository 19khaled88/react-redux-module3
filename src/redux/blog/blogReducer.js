import { SEARCH,AUTHORFILTER,IMAGEFILTER,CATEGORYFILTER } from "./actionTypes"

const  initialState ={
    value:[
        {
            'image':'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            'category':'Commentary',
            'categoryTitle':'Boost your conversion rate',
            'authorImage':'https://avatars.githubusercontent.com/u/73503432?v=4',
            'authorName':'Learn with sumit',
            'date':'11 Jul, 2022',
            'readTime':'6 min read'
        },
        {
            'image':'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            'category':'Clinical',
            'categoryTitle':'How to use search engine optimization to drive sales',
            'authorImage':'https://avatars.githubusercontent.com/u/73503432?v=4',
            'authorName':'Learn with sumit',
            'date':'08 Feb, 2022',
            'readTime':'11 min read'
        },
        {
            'image':'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            'category':'Commentary',
            'categoryTitle':' Improve your customer experience',
            'authorImage':'https://avatars.githubusercontent.com/u/73503432?v=4',
            'authorName':'Learn with sumit',
            'date':'20 Mar, 2022',
            'readTime':'9 min read'
        },
        {
            'image':'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            'category':'Freelance',
            'categoryTitle':'Boost your conversion rate',
            'authorImage':'https://avatars.githubusercontent.com/u/73503432?v=4',
            'authorName':'Learn with sumit',
            'date':'11 Jul, 2022',
            'readTime':'6 min read'
        },
        {
            'image':'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            'category':'Feature Writing',
            'categoryTitle':'How to use search engine optimization to drive sales',
            'authorImage':'https://avatars.githubusercontent.com/u/73503432?v=4',
            'authorName':'Learn with sumit',
            'date':'08 Feb, 2022',
            'readTime':'11 min read'
        },
        {
            'image':'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            'category':'Clinical',
            'categoryTitle':'How to use search engine optimization to drive sales',
            'authorImage':'https://avatars.githubusercontent.com/u/73503432?v=4',
            'authorName':'Learn with sumit',
            'date':'08 Feb, 2022',
            'readTime':'11 min read'
        },
        {
            'image':'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            'category':'Investigative',
            'categoryTitle':'Improve your customer experience',
            'authorImage':'https://avatars.githubusercontent.com/u/73503432?v=4',
            'authorName':'Learn with sumit',
            'date':'20 Mar, 2022',
            'readTime':'9 min read'
        },
        {
            'image':'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            'category':'Freelance',
            'categoryTitle':'Improve your customer experience',
            'authorImage':'https://avatars.githubusercontent.com/u/73503432?v=4',
            'authorName':'Learn with sumit',
            'date':'20 Mar, 2022',
            'readTime':'9 min read'
        },
        {
            'image':'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            'category':'Investigative',
            'categoryTitle':'Improve your customer experience',
            'authorImage':'https://avatars.githubusercontent.com/u/73503432?v=4',
            'authorName':'Learn with sumit',
            'date':'20 Mar, 2022',
            'readTime':'9 min read'
        },
    ]
}
const blogReducer =(state = initialState, action)=> {
    console.log(state)
    switch(action.type){
        case SEARCH:
            return{
                ...state,
                value:state
            }
        case AUTHORFILTER:
            return{
                ...state,
                value:state
            }
        default:
            return state;
    }
}

export default blogReducer;
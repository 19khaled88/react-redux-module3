import { IMAGEFILTER, CATEGORYFILTER,AUTHORFILTER,SEARCH } from "./actionTypes"

export const search =(value)=>{
    return {
        type:SEARCH,
        payload:value
    }
}
export const categoryfilter =(value)=>{
    return {
        type:CATEGORYFILTER,
        payload:value
    }
}
export const imagefilter =(value)=>{
    return {
        type:IMAGEFILTER,
        payload:value
    }
}
export const authorfilter =(value)=>{
    return {
        type:AUTHORFILTER,
        payload:value
    }
}
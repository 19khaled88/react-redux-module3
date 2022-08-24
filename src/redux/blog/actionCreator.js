import {
  IMAGEFILTER,
  CATEGORYFILTER,
  AUTHORNAMEFILTER,
  SEARCH,
  AUTHORIMAGEFILTER,
  ALLFILTER,
} from './actionTypes'

export const searchfilter = (value) => {
  return {
    type: SEARCH,
    payload: value,
  }
}
export const categoryfilter = (value) => {
  return {
    type: CATEGORYFILTER,
    payload: value,
  }
}
export const imagefilter = (value) => {
  return {
    type: IMAGEFILTER,
    payload: value,
  }
}
export const authornamefilter = (value) => {
  return {
    type: AUTHORNAMEFILTER,
    payload: value,
  }
}
export const authorimagefilter = (value) => {
  return {
    type: AUTHORIMAGEFILTER,
    payload: value,
  }
}
export const allfilter = (value) => {
  return {
    type: ALLFILTER,
    payload:value
  }
}

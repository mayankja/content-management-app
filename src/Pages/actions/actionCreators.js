import { SET_PAGES_LIST, SET_PAGE_DATA } from '../constants'
export const setPagesList = (data) => ({ type: SET_PAGES_LIST, payload: data })
export const setPageData = (data) => ({ type: SET_PAGE_DATA, payload: data })

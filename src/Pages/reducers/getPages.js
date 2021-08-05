import * as constants from "../constants";

const getPagesList = (state, action) => {
  return {
    ...state,
    error: null,
    pages: action.payload.pages,
  };
}

const getPageData = (state, action) => {
  return {
    ...state,
    error: null,
    pageDetails: action.payload.page,
  };
}

export const getPagesHandler = {
  [constants.SET_PAGES_LIST]: getPagesList,
  [constants.SET_PAGE_DATA]: getPageData
}
import axios from "axios";
import * as actions from './actionCreators'


export const getPagesList = () => dispatch => {
  return axios.get(`http://localhost:5000/api/fetch_pages`)
    .then((res) => {
      dispatch(actions.setPagesList(res.data))
      console.log(res)
    })
    .catch((err) => console.log(err))
}

export const getPageData = (id) => dispatch => {
  return axios.get(`http://localhost:5000/api/get_page/${id}`)
    .then((res) => {
      dispatch(actions.setPageData(res.data))
      console.log(res)
    })
    .catch((err) => console.log(err))
}

export const addPage = (data) => dispatch => {
  return axios.post(`http://localhost:5000/api/add_page`, data)
    .then((res) => {
      console.log(res)
      alert("page details saved")
    })
    .catch((err) => console.log(err))
}

export const updatePageDetails = (data) => dispatch => {
  return axios.put(`http://localhost:5000/api/update_page`, data)
    .then((res) => {
      dispatch(getPageData(data.id))
      console.log(res)
    })
    .catch((err) => console.log(err))
}
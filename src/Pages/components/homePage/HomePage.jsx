import React, { useEffect } from 'react'
import Table from './Table'
import { useSelector } from 'react-redux'

const HomePage = ({ getPagesList }) => {
  let pages = useSelector(state => state.pages)

  useEffect(() => {
    getPagesList()
  }, [])

  return (
    <>
      <h1 className='text-center'>Content Management</h1>
      {pages && <Table products={pages} />}
    </>
  )
}

export default HomePage
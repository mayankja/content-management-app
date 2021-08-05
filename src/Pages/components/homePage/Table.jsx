import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import SearchField from "react-search-field";

const columns = [{
  dataField: 'pageName',
  text: 'Name'
}, {
  dataField: 'pageDesc',
  text: 'Description'
}, {
  dataField: 'textResources.length',
  text: 'TextResource count'
}];

const Table = ({ products }) => {
  const [pages, setPages] = useState(products)
  const history = useHistory()
  const rowEvents = {
    onClick: (e, row) => {
      history.push(`/page_details/${row.id}`)
    }
  };

  const onChange = (e) => {
    setPages(products.filter(page => page.pageName.toLowerCase().includes(e.toLowerCase())));
  }

  useEffect(() => {
    setPages(products)
  }, [products])

  return (
    <div className="px-5 my-3 ">
      <div className='row px-3 my-5'>
        <SearchField
          placeholder="Search..."
          onChange={onChange}
          classNames="test-class col-8 "
        />
        <Link to="/add_new_page" className='col d-flex justify-content-end' >
          <span className='btn '>
            <i class="far fa-plus-circle " />
            Add New Page
        </span>
        </Link>
      </div>
      {pages &&
        pages.length
        ? <BootstrapTable keyField='id' data={pages} columns={columns} rowEvents={rowEvents} />
        : null
      }
    </div>
  )
}


export default Table

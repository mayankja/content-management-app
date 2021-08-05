import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SubmissionModal from './SubmissionModel'
import DeleteModal from './DeleteModal'

const PageDetails = ({ updatePageDetails, getPageData, match: { params: { id } } }) => {
  const [openModal, setOpenModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [title, setTitle] = useState('')
  const [modalType, setModalType] = useState('add')

  const [activeIndex, setActiveIndex] = useState()
  let pageDetails = useSelector(state => state.pageDetails)

  useEffect(() => {
    getPageData(id)
  }, [])

  const handleEditTextResource = (i) => {
    setTitle("Edit your text Resource")
    setOpenModal(!openModal)
    setActiveIndex(i)
    setModalType('edit')
  }
  const handleDeleteTextResource = (i) => {
    setOpenDeleteModal(!openDeleteModal)
    setActiveIndex(i)
  }
  const handleEditTextResourceSubmit = (updatedData) => {
    let updatedPageDetails = pageDetails;
    updatedPageDetails.textResources[activeIndex] = updatedData
    updatePageDetails(updatedPageDetails)
    setOpenModal(!openModal)
  }

  const handleDeleteTextResourceSubmit = () => {
    let updatedPageDetails = pageDetails;
    updatedPageDetails.textResources.splice(activeIndex, 1)
    updatePageDetails(updatedPageDetails)
    handleDeleteTextResource()
  }

  const handleAddTextResource = () => {
    setTitle('Add new Text Resource')
    setOpenModal(!openModal)
    setModalType('add')
  }

  const handleAddTextResourceSubmit = (newTextResource) => {
    let updatedPageDetails = pageDetails;
    updatedPageDetails.textResources.push(newTextResource)
    updatePageDetails(updatedPageDetails)
    setOpenModal(!openModal)
  }

  return (
    <div className="row p-5">
      {pageDetails &&
        <div className="col-12 p-3">
          <div className="px-5 my-3 d-flex">
            <b >Name:</b>
            <p className="px-3">{pageDetails.pageName}</p>
          </div>
          <div className="px-5 my-3 d-flex">
            <b >Url:</b>
            <p className="px-3">{pageDetails.pageUrl}</p>
          </div>
          <div className="px-5 my-3 d-flex ">
            <b >Description:</b>
            <p className="px-3">{pageDetails.pageDesc}</p>
          </div>
          <div className="row px-5">
            <b className="col-2" >Screenshot:</b>
            <div className="col-4">
              <img className="mx-auto img-fluid img-circle d-block" src={pageDetails.pageScreenShot} />
            </div>
          </div>
          <div className="row p-5">
            <div className="col-12 ">
              <div className="row d-flex ">
                <b className="col-11">Text Resources</b>
                <i
                  class="far fa-plus-circle col-1 justify-content-end d-flex px-3"
                  onClick={() => handleAddTextResource()}
                />
              </div>
              {pageDetails.textResources.map((textResource, index) => (
                <div className="row mx-2 px-3 my-3 border border-danger border-shadow rounded">
                  <div className="col-10 ">
                    <h3>{textResource.name}</h3>
                    <p>{textResource.value}</p>
                  </div>
                  <div className="col-2 justify-content-end d-flex">
                    <i className="fal fa-pen-nib p-4" onClick={() => handleEditTextResource(index)} />
                    <i class="fal fa-trash p-4" onClick={() => handleDeleteTextResource(index)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
      <SubmissionModal
        open={openModal}
        textResource={modalType === 'edit' ? pageDetails && pageDetails.textResources[activeIndex] : null}
        toggle={handleEditTextResource}
        onSubmit={modalType === 'edit' ? handleEditTextResourceSubmit : handleAddTextResourceSubmit}
        submitButtonName={modalType === 'edit' ? "Update" : "Add"}
        title={title}
        modalType={modalType}
      />
      <DeleteModal
        open={openDeleteModal}
        toggle={handleDeleteTextResource}
        onSubmit={handleDeleteTextResourceSubmit}
        submitButtonName={"Delete"}
      />
    </div>
  )
}

export default PageDetails
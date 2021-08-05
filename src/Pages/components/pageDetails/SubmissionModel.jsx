import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const SubmissionModal = ({
  open,
  toggle,
  onSubmit,
  submitButtonName,
  textResource,
  title,
}) => {
  const [txtRes, setTxtRes] = useState({
    name: '',
    value: '',
    type: '',
    maxLength: '',
    lineType: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTxtRes({ ...txtRes, [name]: value });
  }

  useEffect(() => {
    textResource ? setTxtRes(textResource) : defaultTxtResInitialize()
  }, [textResource])

  const defaultTxtResInitialize = () => {
    setTxtRes({
      name: '',
      value: '',
      type: '',
      maxLength: '',
      lineType: ''
    })
  }

  const handleSubmit = (txtRes) => {
    onSubmit(txtRes)
    defaultTxtResInitialize()
  }

  return (
    < Modal isOpen={open} toggle={toggle} className="submission-modal" >
      <ModalHeader toggle={toggle} className="modal-header">
        {title}
      </ModalHeader>
      <ModalBody>
        {txtRes && <div className="col-12 col-md-6 p-md-5 p-3">
          <div className="form-group">
            <label>TR name</label>
            <input className="form-control" type="text" onChange={(e) => handleChange(e)} name="name" value={txtRes.name} />
          </div>
          <div className="form-group">
            <label>TR Value</label>
            <input className="form-control" type="text" onChange={(e) => handleChange(e)} name="value" value={txtRes.value} />
          </div>
          <div className="form-group">
            <label>TR type</label>
            <input className="form-control" type="text" onChange={(e) => handleChange(e)} name="type" value={txtRes.type} />
          </div>
          <div className="form-group">
            <label>TR max character length</label>
            <input className="form-control" type="text" onChange={(e) => handleChange(e)} name="maxLength" value={txtRes.maxLength} />
          </div>
          <div className="form-group">
            <label>TR line type</label>
            <input className="form-control" type="text" onChange={(e) => handleChange(e)} name="lineType" value={txtRes.lineType} />
          </div>
        </div>
        }
      </ModalBody>
      <ModalFooter>
        <div className="display-flex">
          <Button className="mx-2" color="success" onClick={() => handleSubmit(txtRes)}>
            {submitButtonName}
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
        </Button>
        </div>
      </ModalFooter>
    </Modal >
  )
}

export default SubmissionModal;

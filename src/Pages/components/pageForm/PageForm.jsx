import React, { useState } from 'react'
import FileBase64 from 'react-file-base64';
import { useHistory } from 'react-router-dom'

const PageForm = ({ addPage }) => {
  const [textResources, setTextResources] = useState([])
  const [pageScreenShot, setPageScreenShot] = useState()
  const [pageName, setPageName] = useState()
  const [pageUrl, setPageUrl] = useState()
  const [pageDesc, setPageDesc] = useState()

  const [textResource, setTextResource] = useState({
    name: '',
    value: '',
    type: '',
    maxLength: '',
    lineType: ''
  })

  const { name, value, type, maxLength, lineType } = textResource

  const clearTextResources = () => {
    setTextResource({
      name: '',
      value: '',
      type: '',
      maxLength: '',
      lineType: ''
    })
  }

  const handleTextResources = () => {
    textResources.push(textResource)
    setTextResources([...textResources])
    clearTextResources()
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTextResource({ ...textResource, [name]: value });
  }

  const clearFormFields = () => {
    setPageScreenShot('')
    setPageName('')
    setPageUrl('')
    setPageDesc('')
    setTextResources([])
    clearTextResources()
  }
  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault()
    const data = {
      textResources,
      pageScreenShot,
      pageName,
      pageUrl,
      pageDesc
    }
    if (!pageName) { return alert("please fill page name") }
    data['id'] = Math.random().toString(36).substr(4, 9)
    addPage(data)
    clearFormFields()
    history.push('/')
  }

  return (
    <div>
      <form>
        <div class="form-group m-4">
          <label>Page Name</label>
          <input class="form-control" value={pageName} onChange={(e) => setPageName(e.target.value)} />
        </div>
        <div class="form-group m-4">
          <label> Page url</label>
          <input class="form-control" value={pageUrl} onChange={(e) => setPageUrl(e.target.value)} />
        </div>
        <div class="form-group m-4">
          <label>Page Description</label>
          <textarea class="form-control" value={pageDesc} onChange={(e) => setPageDesc(e.target.value)} />
        </div>
        <div class="form-group m-4">
          <label>Page snapshot</label>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPageScreenShot(base64)}
          />
        </div>
        <div className="row m-2  border d-flex justify-content-center">
          <div className="col-12 col-md-6 p-md-5 p-3">
            <div className="form-group">
              <label>TR name</label>
              <input className="form-control" type="text" onChange={(e) => handleChange(e)} name="name" value={name} />
            </div>
            <div className="form-group">
              <label>TR Value</label>
              <input className="form-control" type="text" onChange={(e) => handleChange(e)} name="value" value={value} />
            </div>
            <div className="form-group">
              <label>TR type</label>
              <input className="form-control" type="text" onChange={(e) => handleChange(e)} name="type" value={type} />
            </div>
            <div className="form-group">
              <label>TR max character length</label>
              <input className="form-control" type="text" onChange={(e) => handleChange(e)} name="maxLength" value={maxLength} />
            </div>
            <div className="form-group">
              <label>TR line type</label>
              <input className="form-control" type="text" onChange={(e) => handleChange(e)} name="lineType" value={lineType} />
            </div>
            <button className="btn btn-secondary " type="button" onClick={() => handleTextResources()}>add</button>
          </div>
          <div className="col-12 col-md-6">
            <div className="row border p-2 my-2" >
              <div className="col-6">Name</div>
              <div className="col-6">Value</div>
            </div>
            {textResources.map((tr, i) => (
              <div className="row border p-2 my-2" key={i}>
                <div className="col-6">{tr.name}</div>
                <div className="col-6">{tr.value}</div>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" class="btn btn-primary" onClick={(e) => onSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default PageForm

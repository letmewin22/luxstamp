import React, {useState} from 'react'
import { DownloadIcon } from '../DownloadIcon'

export const FormVariants = ({state}) => {

  const [files, setFiles] = useState([])

  const onChangeHandler = (e) => {
    console.log(e.target.files[0].name)
    files.push(e.target.files[0].name)
    setFiles(files)
  }


  return (
    <>
      {state.content && state.content === 'download-screen' && (
        <div className='order__form-download'>
          <p className='order__form-download-text'>
            <span>*</span> {state.contentText}
          </p>
          <label className='order__download-button'>
            <span>
              <DownloadIcon />
            </span>
            {state.contentBtn}
            <input type='file' onChange={onChangeHandler} />
          </label>
            {/* <span>{files.join(', ')}</span> */}
        </div>
      )}
    </>
  )
}

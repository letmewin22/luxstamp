import React from 'react'
import {DownloadIcon} from '../DownloadIcon'

const TYPES = ['image/jpeg', 'image/png']

export const FormVariants = ({state, filesState}) => {
  const onChangeHandler = (e) => {
    const file = e.target.files[0]
    if (TYPES.includes(file.type) && file.size < 10000000) {
      filesState.setFiles(file)
    } else {
      alert(
        'Файлы должны быть только в формате jpg или png и весить не больше 10мб'
      )
    }
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
            <input
              type='file'
              name='file'
              id='file'
              onChange={onChangeHandler}
            />
          </label>
          <span className='files-output'>
            {filesState.files && filesState.files.name}
          </span>
        </div>
      )}
    </>
  )
}

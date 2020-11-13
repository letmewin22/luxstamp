import React from 'react'
import { DownloadIcon } from '../DownloadIcon'

export const FormVariants = ({state}) => {
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
            <input type='file' />
          </label>
        </div>
      )}
    </>
  )
}

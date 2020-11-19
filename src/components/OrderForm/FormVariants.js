import React, {useContext} from 'react'
import {DownloadIcon} from '../DownloadIcon'
import LangContext from '@/context/LangContext'

const TYPES = ['image/jpeg', 'image/png']

export const FormVariants = ({state, filesState}) => {
  const lang = useContext(LangContext)

  const alertText =
    lang === 'ru'
      ? 'Файлы должны быть только в формате jpg или png и весить не больше 10мб'
      : 'Файли повинні бути тільки у форматі jpg або png та їх розмір не повинен перевищувати 10мб'

  const onChangeHandler = e => {
    const file = e.target.files[0]
    if (TYPES.includes(file.type) && file.size < 10000000) {
      filesState.setFiles(file)
    } else {
      alert(alertText)
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

import PropTypes from 'prop-types'
import { useCallback } from 'react'

import { IMAGE_MAX_SIZE_IN_MB } from '../constants'

const FILE_INPUT_ID = 'image_file_input'

function UploadInput({ onClick, onChange, disabled = false }) {
  const handleOnChange = useCallback(
    (e) => {
      onChange(e)
      document.getElementById(FILE_INPUT_ID).value = ''
    },
    [onChange]
  )

  return (
    <div className='cu-px-standard pb-8'>
      <label
        htmlFor={FILE_INPUT_ID}
        onClick={onClick}
        className='pb-1 pl-1 text-lg font-medium text-gray-900 dark:text-white'
      >
        {`Upload file`}
      </label>
      <input
        type='file'
        accept='image/*'
        id={FILE_INPUT_ID}
        disabled={disabled}
        aria-describedby='image_file_input_help'
        className='block w-full text-lg leading-5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
        onClick={onClick}
        onChange={handleOnChange}
      />
      <p
        id='image_file_input_help'
        className='pt-1 pl-1 text-lg leading-5 text-gray-500 dark:text-gray-300'
      >
        {`Any image file (max ${IMAGE_MAX_SIZE_IN_MB} MB).`}
      </p>
    </div>
  )
}

UploadInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default UploadInput

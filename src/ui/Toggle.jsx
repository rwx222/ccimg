import PropTypes from 'prop-types'

function Toggle({ children, checked, onChange }) {
  return (
    <label className='inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        className='sr-only peer'
        checked={checked}
        onChange={onChange}
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-600"></div>

      {Boolean(children) && (
        <span className='text-lg leading-5 font-medium ms-3 text-gray-900 dark:text-gray-300'>
          {children}
        </span>
      )}
    </label>
  )
}

Toggle.propTypes = {
  children: PropTypes.node,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Toggle

import { useMemo } from 'react'

type SelectProps = {
  id?: string
  label?: string
  children: React.ReactNode
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  disabled?: boolean
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  children,
  value,
  onChange,
  disabled,
}) => {
  const uid = useMemo(() => {
    return id || `selector_${Math.random()}`
  }, [id])

  return (
    <div>
      {Boolean(label) && (
        <label
          htmlFor={uid}
          className='block text-lg leading-5 font-medium mb-1 text-gray-900 dark:text-white'
        >
          {label}
        </label>
      )}

      <select
        id={uid}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className='block w-full px-2 py-1 text-center text-lg leading-5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500'
      >
        {children}
      </select>
    </div>
  )
}

export default Select

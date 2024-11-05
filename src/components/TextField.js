function TextField({ title, inputType, icon, value, onValueChange }) {
  return (
    <div className="relative flex items-center w-full">
      <label htmlFor="UserEmail" className="sr-only">{title}</label>

      <input
        type={inputType}
        placeholder={title}
        className="w-full border-gray-400 rounded-md shadow-sm pe-10 sm:text-sm"
        value={value}
        onChange={onValueChange}
      />

      <span
        className="absolute inset-y-0 grid w-10 text-gray-400 pointer-events-none end-0 place-content-center"
      >
        {icon}
      </span>
    </div>
  )
}

export default TextField;
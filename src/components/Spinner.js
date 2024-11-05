function Spinner({ hidden }) {
  return (
    <div className="p-2 bg-white rounded-full shadow-md dark:bg-gray-950" hidden={hidden}>
      <div
        className="h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-blue-600 dark:text-white"
        role="status"
      >
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
      </div>
    </div>
  )
}

export default Spinner;

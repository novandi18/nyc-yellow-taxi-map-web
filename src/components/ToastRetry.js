function ToastRetry({ retry }) {
  return (
    <div className="p-3 bg-white border border-gray-400 rounded-md shadow-md">
      <h3>Oops! An error occurred while retrieving data.</h3>
      <button className="px-4 py-1 mt-2 text-white bg-blue-600 rounded hover:bg-blue-700 active:bg-blue-800" onClick={retry}>
        Retry
      </button>
    </div>
  )
}

export default ToastRetry;
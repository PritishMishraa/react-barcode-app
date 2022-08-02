const Button = ({ disabled }) => {
    return (
        <div className="flex space-x-2 justify-center m-5">
            <button type="button" disabled={disabled} className="disabled:bg-gray-500 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Download</button>
        </div>
    )
}

export default Button
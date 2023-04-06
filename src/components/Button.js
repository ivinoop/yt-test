const Button = ({ name }) => {
  return (
    <div>
      <button className='px-3 py-[2px] bg-gray-300 rounded-md text-sm mx-1'>
        {name}
      </button>
    </div>
  )
}

export default Button




const Arrow = ({ onClick, direction }) => {
  return (
    <div onClick={onClick} className={`sm:size-8 size-6 flex justify-center items-center rounded-sm bg-[#BEBEBE] cursor-pointer hover:bg-[#F5F5DC] transition ease-in duration-200 ${direction === 'right' && 'rotate-180'} `} >
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.29798 4.86567L5.51465 0.649L4.86565 0L-1.81198e-05 4.86567L4.86565 9.73133L5.51465 9.08233L1.29798 4.86567Z" fill="black"/>
        </svg>
    </div>
  )
}

export default Arrow


import { NavLink } from 'react-router-dom';

function Status() {
  return (
    <div className='flex justify-between lg:justify-start mb-10'>
        <NavLink to="/" className={({isActive})=>` text-center text-white rounded-l-md ${isActive? "bg-[#00E67D]" : "bg-[#9B9B9B]"} text-xl md:text-2xl w-full lg:w-fit  py-1 lg:pl-6 lg:pr-5 lg:py-2`} >To Do</NavLink>
        <NavLink to="/completed" className={({isActive})=>` text-center text-white rounded-r-md ${isActive? "bg-[#00E67D]" : "bg-[#9B9B9B]"} w-full lg:w-fit text-xl md:text-2xl py-1 lg:pl-6 lg:pr-5 lg:py-2`} >Completed</NavLink>
    </div>
  )
}

export default Status;

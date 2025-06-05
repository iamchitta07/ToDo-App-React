import { NavLink } from 'react-router-dom';

function Status() {
  return (
    <div className='mb-10'>
        <NavLink to="/" className={({isActive})=>`text-white text-2xl  pl-6 pr-4 py-1 rounded-l-md ${isActive? "bg-[#00E67D]" : "bg-[#9B9B9B]"}`} >To Do</NavLink>
        <NavLink to="/completed" className={({isActive})=>`text-white text-2xl py-1 pr-6 pl-4 rounded-r-md ${isActive? "bg-[#00E67D]" : "bg-[#9B9B9B]"}`} >Completed</NavLink>
    </div>
  )
}

export default Status;

import { BiTrash } from "react-icons/bi";

function CompletedCard({val, del}) {
  return (
    <>
        {val.map((ele,idx)=>{
           return <div key={idx} className="w-full p-4 lg:p-6 xl:p-8 bg-[#494949] rounded-md lg:rounded-xl mb-5 lg:mb-10 flex justify-between items-center">
                <div>
                    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#00E67D] mb-1 lg:mb-3">{ele.title}</h1>
                    <h3 className="text-[#CECECE] text-sm md:text-md xl:text-xl text-justify">{ele.description}</h3>
                    <h4><i className="text-xs lg:text-md text-[#CECECE] select-none">Completed on : {ele.date} at {ele.time}</i></h4>
                </div>
                <div className="flex items-center ml-5 lg:ml-8">
                    <BiTrash onClick={()=>del(idx)} className="h-8 w-8  md:h-10 md:w-10 xl:h-13 xl:w-13 text-red-400 lg:text-red-200 hover:text-red-400 duration-200 ease-in-out" />
                </div>
            </div>
        })}
    </>
  )
}

export default CompletedCard;

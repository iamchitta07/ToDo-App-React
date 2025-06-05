import { BiTrash } from "react-icons/bi";

function CompletedCard({val, del}) {
  return (
    <>
        {val.map((ele,idx)=>{
           return <div key={idx} className="w-full p-10 bg-[#494949] rounded-xl mb-10 flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-semibold text-[#00E67D] mb-3">{ele.title}</h1>
                    <h3 className="text-[#CECECE] text-xl text-justify mb-2">{ele.description}</h3>
                    <h4><i className="text-md text-[#CECECE] select-none">Completed on : {ele.date} at {ele.time}</i></h4>
                </div>
                <div className="flex gap-10 items-center ml-8">
                    <BiTrash onClick={()=>del(idx)} className="h-13 w-13 text-red-200 hover:text-red-400 duration-200 ease-in-out" />
                </div>
            </div>
        })}
    </>
  )
}

export default CompletedCard;

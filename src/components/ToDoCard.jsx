import { BiTrash , BiCheckSquare } from "react-icons/bi";

function ToDoCard({val, del, handelToDo}) {
    return (
        <>
            {val.map((ele,idx)=>{
                return (
                    <div key={idx} className="w-full p-10 bg-[#494949] rounded-xl mb-10 flex justify-between items-center">
                        <div>
                            <h1 className="text-4xl font-semibold text-[#00E67D] mb-3">{ele.title}</h1>
                            <h3 className="text-[#CECECE] text-xl text-justify">{ele.description}</h3>
                        </div>
                        <div className="flex gap-10 items-center ml-8">
                            <BiTrash onClick={()=>del(idx)} className="h-13 w-13 text-red-200 hover:text-red-400 duration-200 ease-in-out" />
                            <BiCheckSquare onClick={()=>handelToDo(idx)} className="h-13 w-13 text-[#8AF294] hover:text-[#00B84F] duration-200 ease-in-out" />
                        </div>
                </div>)
            })}

        </>
    )
    }

export default ToDoCard;

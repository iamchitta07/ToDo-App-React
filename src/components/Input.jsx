import { useRef } from 'react'

function Input({fill}) {
    let titleRef = useRef(null)
    let desRef = useRef(null)


    let submitForm = (e)=>{
        e.preventDefault();
        let title = titleRef.current.value
        let des = desRef.current.value

        if(title.trim()==="" || des.trim()=="") {
            alert("Please Provide Title and Description");
            return;
        }

        let data = {
            title: title,
            description: des
        }

        fill(data);
        titleRef.current.value = "";
        desRef.current.value = "";
    }

    return (
        <>
            <form className="w-full flex  items-end justify-between pt-20 pb-10" onSubmit={submitForm}>
                <div className="w-4/10">
                    <label className="block text-3xl text-white font-bold mb-3 select-none"> Title: </label>
                    <input type="text" ref={titleRef} className="py-3 px-4 text-2xl focus:outline-2 focus:outline-[#00B84F] focus:drop-shadow-[#00a51A]/30 focus:drop-shadow-xl/25 bg-white rounded-md w-full " placeholder="What is the title of your To-Do ?"/>
                </div>
                <div className="w-4/10">
                    <label className="block text-3xl text-white font-bold mb-3 select-none"> Description: </label>
                    <input type="text" ref={desRef} className=" py-3 px-4 text-2xl focus:outline-2 focus:outline-[#00B84F] focus:drop-shadow-[#00a51A]/30 focus:drop-shadow-xl/25 bg-white rounded-md w-full " placeholder="What is the description of your To-Do ?"/>
                </div>
                <div className="pt-8">
                    <button type='submit' className="px-10 py-3 text-2xl font-semibold bg-[#00B84F] hover:bg-[#00a51A] hover:drop-shadow-md hover:drop-shadow-[#00a51A]/20  rounded-xl text-white ">Add</button>
                </div>
            </form>
        </>
    )
}

export default Input;

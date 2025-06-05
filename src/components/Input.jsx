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
            <form className="w-full lg:flex  lg:items-end lg:justify-between pt-10 pb-5 lg:pt-15 lg:pb-8  md:gap-4 xl:pt-20 xl:pb-10" onSubmit={submitForm}>
                <div className="lg:w-4/10 mb-3 lg:mb-0">
                    <label className="text-white font-bold mb-3 select-none md:block text-xl md:text-2xl lg:text-3xl"> Title: </label>
                    <input type="text" ref={titleRef} className="focus:outline-2 focus:outline-[#00B84F] focus:drop-shadow-[#00a51A]/30 focus:drop-shadow-xl/25 bg-white rounded-md w-full text-md md:text-xl py-2 px-3 xl:py-3 xl:px-4 xl:text-2xl " placeholder="Title of your To-Do ?"/>
                </div>
                <div className="lg:w-4/10">
                    <label className="text-white font-bold mb-3 select-none md:block text-xl md:text-2xl lg:text-3xl"> Description: </label>
                    <input type="text" ref={desRef} className="ocus:outline-2 focus:outline-[#00B84F] focus:drop-shadow-[#00a51A]/30 focus:drop-shadow-xl/25 bg-white rounded-md w-full text-md md:text-xl py-2 px-3 xl:py-3 xl:px-4 xl:text-2xl" placeholder="Description of your To-Do ?"/>
                </div>
                <div className="pt-8">
                    <button type='submit' className="font-semibold bg-[#00B84F] hover:bg-[#00a51A] hover:drop-shadow-md hover:drop-shadow-[#00a51A]/20  rounded-xl text-white text-md md:text-xl w-full py-2 lg:px-8 xl:px-10 xl:py-3 xl:text-2xl">Add</button>
                </div>
            </form>
        </>
    )
}

export default Input;

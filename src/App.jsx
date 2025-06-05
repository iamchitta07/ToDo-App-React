import Input from "./components/Input";
import Status from "./components/Status";
import { Outlet } from "react-router-dom";

function App({fillToDo}) {

    return (
        <>
            <h1 className="text-center my-20 text-6xl font-bold text-white select-none">My To-Dos</h1>
            <div className="w-full flex justify-center mb-20">
                <div className="rounded-xl w-3/4 bg-[#343434] h-full flex flex-col justify-center px-10 md:px-20">
                    <Input fill ={fillToDo}/>
                    <div className="flex justify-center">
                        <div className="h-1 items-center w-full bg-white mb-10"/>
                    </div>
                    <Status/>
                    <Outlet/>
                </div>
            </div>

        </>
    )
}

export default App;

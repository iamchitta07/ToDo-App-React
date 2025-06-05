import { useState } from "react";
import CompletedCard from "./components/CompletedCard";
import ToDoCard from "./components/ToDoCard";
import App from "./App";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

function Layout() {

    let [val, useVal] = useState([]);
    let [completed, useCompleted] = useState([]);

    let delFromToDo = (idx)=>{
        useVal(prev=>(
            prev.filter((_,index)=>index!=idx)
        ))
    }

    let fillToDo = (data)=>{
        useVal(prev=>[...prev, data])
    }

    let handelToDo = (idx)=>{
        const now = new Date();
        let yyyy = now.getFullYear();
        let mm = String(now.getMonth() + 1).padStart(2, '0');
        let dd = String(now.getDate()).padStart(2, '0');

        let hr = String(now.getHours()).padStart(2, '0');
        let min = String(now.getMinutes()).padStart(2, '0');
        let sec = String(now.getSeconds()).padStart(2, '0');

        let data = {
            title: val[idx].title,
            description: val[idx].description,
            date: `${dd}.${mm}.${yyyy}`,
            time: `${hr}:${min}:${sec}`
        }
        useVal(prev=>(
            prev.filter((_,index)=>idx!=index)
        ))

        useCompleted(prev=>[...prev,data])
    }

    const complDel = (idx)=>{
        useCompleted((prev)=>(
            prev.filter((_,index)=>idx!=index)
        ))
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element = {<App fillToDo={fillToDo} />}>
                <Route path="" element = {<ToDoCard val = {val} del={delFromToDo} handelToDo={handelToDo} />}/>
                <Route path="completed" element = {<CompletedCard val={completed} del = {complDel} />}/>

            </Route>
        )
    )

    return (
        <RouterProvider router={router}/>
    )
}

export default Layout;


/**
 *
 *
 {val.map((ele,idx)=>{
    return <ToDoCard key={idx} title={ele.title} des = {ele.description} index = {idx} del = {delFromToDo} handelToDo={handelToDo} />
})}

{completed.map((ele,idx)=>{
    return <CompletedCard key={idx} title={ele.title} des = {ele.description} date = {ele.date} time = {ele.time} index = {idx} del = {complDel} />
})}

 *
 *
 *
 *
 */

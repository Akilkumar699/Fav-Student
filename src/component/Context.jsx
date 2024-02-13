import Add from "./Addlist"
import Remove from "./Removelist"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { createContext, useState } from "react"


const Namelist=createContext()

const Context=()=>{
    const [list,setlist]=useState([])
    return(
      <BrowserRouter>
        <nav className=" p-5 flex gap-20 bg-orange-500">
          <Link to={"/"}>Add List</Link>
          {" "}
          <Link to={"/remove"}>Remove List</Link>
        </nav>
        <Namelist.Provider value={{list,setlist}}>
        <Routes>
          <Route path="/" element={<Add/>}></Route>
          <Route path="/remove" element={<Remove/>}></Route>
        </Routes>
        </Namelist.Provider>
      </BrowserRouter>
    )
}

export default Context
export {Namelist}
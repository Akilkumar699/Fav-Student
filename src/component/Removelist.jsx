import { useContext } from "react"
import {Namelist} from "./Context"

const Remove=()=>{
    const {list,setlist}=useContext(Namelist)
    const handleRemove=(removeid)=>{
        const removeitem=list.filter((item)=>{
            if(item.id===removeid){
                return false
            }
            else{
                return true
            }
        })
        setlist(removeitem)
    }

    return(
        <div className=" w-1/5">
            {
                list.map((item)=>{
                    return (
                        <div className=" flex gap-10 items-center mt-5 mx-3">
                            <p className=" relative left-6">{item.Name}</p>
                            <button className=" bg-red-600 p-1 rounded-md absolute left-36" onClick={()=>{handleRemove(item.id)}}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Remove
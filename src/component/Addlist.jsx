import { useState } from "react"
import {Namelist} from "./Context"
import { useContext } from "react"

const Add=()=>{
    const {list,setlist}=useContext(Namelist)
    const [activity] =useState(
        [
            {Name:"Bharath",id:1},
            {Name:"Akash",id:2},
            {Name:"Ajay",id:3},
            {Name:"Bala",id:4},
            {Name:"Kamal",id:5},
        ])

        const handleAdd = (addid) => {
            // Check if the item is already in the list
            const isAlreadyAdded = list.some((item) => item.id === addid);
            console.log(isAlreadyAdded)
            if (!isAlreadyAdded) {
              // Find the selected item from the activity array
              const selectedActivity = activity.find((item) => item.id === addid);
                console.log(selectedActivity)
              // Update the state with the selected item
              setlist([...list, selectedActivity]);
            }
          };
    return(
        <div>
            {
                activity.map((item,index)=>{
                    return(
                        <div className=" flex gap-10 items-center mt-5 mx-5">
                                <p>{index+1}.{item.Name}</p>
                                <button className=" bg-black text-white p-1 rounded-md absolute left-36" onClick={()=>{handleAdd(item.id)}}>Add to favourite</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Add
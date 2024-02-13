import { useState } from "react"
import {Namelist} from "./Context"
import { useContext } from "react"

const Add=()=>{
    const {list,setlist}=useContext(Namelist)
    console.log(list)
    const [activity,setActivity] =useState(
        [
            {Name:"Bharath",id:1,fav:true},
            {Name:"Akash",id:2,fav:true},
            {Name:"Ajay",id:3,fav:true},
            {Name:"Bala",id:4,fav:true},
            {Name:"Kamal",id:5,fav:true},
        ])

        const handleAdd = (addid,event) => {
            // Check if the item is already in the list
            const isAlreadyAdded = list.some((item) => item.id === addid);
            console.log(isAlreadyAdded)
            if (!isAlreadyAdded) {
              // Find the selected item from the activity array
              const selectedActivity = activity.find((item) => item.id === addid);
                console.log(selectedActivity)
              // Update the state with the selected item
              setlist([...list, selectedActivity]);

              const updatedActivity = activity.map((item) =>
              item.id === addid ? { ...item, fav: false } : item)
              console.log(updatedActivity)
              setActivity(updatedActivity);
            }
          };
    return(
        <div>
            {
                activity.map((item,index)=>{
                    return(
                        <div className=" flex gap-10 items-center mt-5 mx-5" key={index}>
                              <p>{index+1}.{item.Name}</p>
                              <button className={`${item.fav ? "bg-black" : "bg-gray-400"} text-white p-1 rounded-md absolute left-36`}onClick={() => handleAdd(item.id,this)}>Add to favorite</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Add
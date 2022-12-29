import { Button } from "@mui/material"
import React,{useState} from "react"
import './book.css'


const Bookings=()=>{

    const [theater,setTheater]=useState([{name:"AMB Cinemas: Gachibowli",
                                          price:"300-500",
                                          place:"Hyderabad",
                                          time: [12,2,6,8]
                                        },
                                         
                                          {
                                          name:"Asian Radhika Multiplex: ECIL",
                                          price:"100-300",
                                          place:"Hyderabad",
                                          time: [12,1,3,5]
                                          },
                                          {
                                            name:"Cinepolis: CCPL Mall Malkajgiri, Hyderabad",
                                            price:"200-400",
                                            place:"Hyderabad",
                                            time: [12,1,3,5]
                                          },
                                         {
                                          name:"INOX: GSM Mall, Hyderabad",
                                            price:"200-400",
                                            place:"Hyderabad",
                                            time: [12,3,7,9]
                                         }


])

return(
    <div>
        <h1 className="App">Available Shows and Theatres</h1>
        <ul className="Top">
            {
                theater.map(eachitem=>{
                    return(
                        <div className="card">
                           <h3>{eachitem.name}</h3>
                           <p>Price Range {eachitem.price}</p>
                           <p>Location -- {eachitem.place}</p>
                           <p>Available Timings</p>
                           <ul>
                            {
                                eachitem.time.map(e=>
                                    <Button className="Mylist" variant="contained">{e} 
                                    PM</Button>)
                            }
                           </ul>
                           <Button>Book Now</Button>
                        </div>
                       
                    )
                })
            }
        </ul>
        
    </div>
)
}

export default Bookings
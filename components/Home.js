import React,{useState} from "react"
import Button from '@mui/material/Button';
import { Navigate,useNavigate } from "react-router-dom";
import './Index.css'

const Home =()=>{
    const [data,setData]=useState([
        {
          "id": 1,
          "title": "Thor",
          "image": "https://w0.peakpx.com/wallpaper/477/401/HD-wallpaper-thor-in-avengers-endgame-thumbnail.jpg",
          "genre": "Action, Adenture, comedy",
          "director": "Taika Waititi",
          "stars": "Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Mark Ruffalo",
          "plot": "Thor is imprisoned on the planet Sakaar, and must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
          "currency": "THB",
          "prices": {
            "normal": 200,
            "superior": 300,
            "sofa": 600
          }
        },
        {
          "id": 2,
          "title": "Wonder woman",
          "genre": "Action, Adenture, Fantasy",
          "director": "Patty Jenkins",
          "stars": "Gal Gadot, Chris Pine, Robin Wright, Lucy Davis",
          "plot": "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.",
          "image": "https://m.media-amazon.com/images/I/81eglsc4DeS._SY450_.jpg",
          "currency": "THB",
          "prices": {
            "normal": 200,
            "superior": 300,
            "sofa": 600
          }
        },
        {
          "id": 3,
          "title": "Logan",
          "genre": "Action, Drama, Sci-Fi",
          "director": "James Mangold ",
          "stars": "Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook",
          "plot": "In the near future, a weary Logan cares for an ailing Professor X, somewhere on the Mexican border. However, Logan's attempts to hide from the world, and his legacy, are upended when a young mutant arrives, pursued by dark forces.",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxuy2ErcaQ_HPQn6rdvjz5kmNX0ysJzJKgh9P7R0wSwH8KiiyvuvG6sS4&s=10",
          "currency": "THB",
          "prices": {
            "normal": 200,
            "superior": 300,
            "sofa": 600
          }
        },
        {
          "id": 4,
          "title": "Despicable me 3",
          "genre": "Action, Drama, Sci-Fi",
          "director": "James Mangold ",
          "stars": "Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook",
          "plot": "Gru meets his long-lost charming, cheerful, and more successful twin brother Dru who wants to team up with him for one last criminal heist.",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4N5N0RMXniRON-qFJsZjBOB3t_BgkSBKGoe7DwGuBlk2G9ladyUB9pY&s=10",
          "currency": "THB",
          "prices": {
            "normal": 200,
            "superior": 300,
            "sofa": 600
          }
        },
        {
          "id": 5,
          "title": "Star war",
          "genre": "Action, Drama, Sci-Fi",
          "director": "James Mangold ",
          "stars": "Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook",
          "plot": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9STP8md6I09_oNozMFpci-N-DCBWY6kL2l5BAkdHL6sJHFwTbZDtYd0&s=10",
          "currency": "THB",
          "prices": {
            "normal": 200,
            "superior": 300,
            "sofa": 600
          }
        },
        {
          "id": 6,
          "title": "Pitch Perfect 3",
          "genre": "Animation, Action, Adventure",
          "director": "Trish Sie",
          "stars": "Anna Kendrick, Rebel Wilson, Brittany Snow, Anna Camp",
          "plot": "Following their win at the world championship, the now separated Bellas reunite for one last singing competition at an overseas USO tour, but face a group who uses both instruments and voices.",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMeI7ShaRtAbGlxq9wGVTVmYgjiSA4whZ6DUFnGSKNYyC2js4ALrAS6hRI&s=10",
          "currency": "THB",
          "prices": {
            "normal": 200,
            "superior": 300,
            "sofa": 600
          }
        },
        {
          "id": 7,
          "title": "Opération casse-noisette 2",
          "genre": "Animation, Action, Adventure",
          "director": "Cal Brunker",
          "stars": "Will Arnett, Maya Rudolph, Bobby Cannavale, Bobby Moynihan",
          "plot": "Following the events of the first film, Surly and his friends must stop Oakton City's mayor from destroying their home to make way for a dysfunctional amusement park.",
          "image": "https://play-lh.googleusercontent.com/2iAYiEicewCo8XkK6jXstBllcCPZZCUvr9HVJ8k0IciH95sRwpCrqiOskJjnn9D2uxDBWw",
          "currency": "THB",
          "prices": {
            "normal": 200,
            "superior": 300,
            "sofa": 600
          }
        }
      ]
    )
    const [seletced,setSelected]=useState('');
    const [temp,setTemp]=useState(data)
   console.log(seletced);

const takeInput=(e)=>{
      setSelected(e.target.value)
}   

const filterFun=()=>{
    const element= data.filter(eachitem=>(eachitem.title).toLowerCase().includes(seletced.toLowerCase()))
    setTemp(element)
}

const onBookticket=()=>{
    // const navigate = useNavigate();

    console.log(1);
    return <Navigate to="bookings" />
}

const resetData=()=>{
    setTemp(data);
    setSelected('')
}
    
return (
    <div className="Book">
      <div className="App">
        <img className="Icon" src="https://www.pngitem.com/pimgs/m/193-1936701_transparent-bookmyshow-logo-hd-png-download.png"/> 
       <div>
       <input className="Inputbox" placeholder="Search by Movie Name" value={seletced} onChange={(e)=>takeInput(e)} type="input"/>
       <Button onClick={filterFun} variant="contained" color="success">
        
  Search
</Button>
<Button onClick={resetData} >
        Reset
</Button>
       </div>
        
      </div>
        <ul className="Topcard">
            {
                temp.map((eachitem)=>{
                return (
                    <div className="Card">
                    <img src={eachitem.image} className="Movie"/>
                    <h1>{eachitem.title}</h1>
                    <p>{eachitem.genre}</p>
                    <p>{eachitem.director}</p>
                    <p>{eachitem.stars}</p>
                    <p>{eachitem.plot}</p>
                    <Button onClick={onBookticket} variant="contained">Book Show</Button>
                    </div>
                )
                }
                )
                
            }
        </ul>
    </div>
)
}

export default Home
import {useState} from 'react'
import Header from './components/Header'
import Hunters from "./components/Hunters"
import Search from './components/Search'

function App() {
  const [hunters , setHunter] = useState([
    {
        "name":"Gon",
        "id": 1,
        "misson":"finding his dad",
        "age": "12"
      },
      {"name":"Kurapika",
      "id":2,

        "misson":"killing the phantom troupe",
        "age": "17"},
      {
        "name":"Killua",
        "id":3,
        "misson":"To be with Gon",
        "age": "12"
      
      }
    
  ])
  // search hunter
  const hunterSearch =(id) => {
    setHunter(hunters.filter((hunter) => hunter.id !== id))
  }

  
  return (
    <div className="App">
      <Header/>
      <Hunters hunters={hunters} onSearch= {hunterSearch} />
      <Search/>
    </div>
  );
}



export default App;

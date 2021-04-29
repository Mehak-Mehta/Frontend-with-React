import {useState} from 'react'
import Header from './components/Header'
import Hunters from './components/Hunters'


function App() {
  
  
  const [hunters ] =  useState( [
{
  
    name : "Gon",
    age : 12,
    mission1 : " Mission : Finding ging",
    nen1 : "Nen Type : Enhancer"
  },

{ 
  namee : "Killua",
  
  age1 : 12,
  mission2 : " Mission : To be with gon",
  nen2: "Nen Type : Transmutar"

},

{
  name2 : "Kurapika",
  age2 : 17,
  mission3 : "  Mission : To Kill the Pantom Troupe",
  nen3: "Nen Type : Manupilater,Enhancer"

},


{
  name3 : "Leorio",
  age3 : 19,
  mission4 : "  Mission : To be a doctor",
  nen4 : "Nen Type : Enhancer"

},
{
  name4 : "Ging",
  age1 : "?",
  mission2 : " Mission : To be with gon",
  nen5 : "Nen Type : Transmutar"


}
] , 
)



  return (
    
    <div>
      <Header />
      <Hunters hunters = {hunters}  />
     


    </div>
    
  )

}
  



export default App;

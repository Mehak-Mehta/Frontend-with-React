import {useState} from 'react'
  const Hunters = ({hunters }) => {
    const [show,setShow] = useState(true)
    return (
        <div className="hunters">
          <button   onClick = {() => setShow(!show)}>Show Hunters   </button>
          
          {hunters.map((hunter) => (show? null: 
            <div className="gon">
              {hunter.name} {hunter.age} {hunter.mission1} {hunter.nen1}
              {hunter.namee} {hunter.age1} {hunter.mission2} {hunter.nen2}
              {hunter.name2} {hunter.age2} {hunter.mission3} {hunter.nen3} 
              {hunter.name3} {hunter.age3} {hunter.mission4} {hunter.nen4}
              {hunter.name4} {hunter.age4} {hunter.mission} {hunter.nen5}
            </div>
            
            ))}
         
          
          
        

            
          </div>
           
            

      
        
    )
}


    
    

export default Hunters


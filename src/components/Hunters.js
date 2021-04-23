import React from 'react'
import {VscSearch} from 'react-icons/vsc'
import {VscColorMode} from 'react-icons/vsc'

const Hunters = ({hunters , onSearch}) => {
    return (
        <div className="hunters">
           {hunters.map((hunter) => (<h3> <VscSearch  onClick = {() => onSearch(hunter.id)} />  <VscColorMode />
                   {hunter.name} onSearch={onSearch}
               </h3>))}
        </div>
    )
}

export default Hunters

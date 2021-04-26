import React from 'react'
import Button from './Button'
const Header = ({onAdd , showAdd}) => {
    return (
        <div className="head">
            <h1>
                Welcome To Hunter x Hunter's Fan Web Page!
            </h1>
            <h2>
                Here You Will Find Info On All the hunters in the anime!
            </h2>
            <Button title="Show Hunters" color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}/>
        </div>
    )
}

export default Header

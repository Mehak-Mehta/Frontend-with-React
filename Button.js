import React from 'react'

const Button = ({title , color, text, onClick }) => {
    return (
        <div className="button">
            <h3>{title}</h3>
            <button>
                 onClick={onClick}
      
    
            </button>
        </div>
    )
}

export default Button

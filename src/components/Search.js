import React from 'react'
import {VscSearch} from 'react-icons/vsc'
import {useState} from 'react'


const Search = () => {
    const [name , setName] = useState('')
    return (
        <form className="search">
            <div className = " add-search">
                <VscSearch />
                <input 
                    type="text"
                    value={name}
                    onChange = {(e) => setName(e.target.value)}
                />

            </div>
        </form>
    )
}

export default Search

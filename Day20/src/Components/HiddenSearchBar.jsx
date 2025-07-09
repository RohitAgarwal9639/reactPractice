import React from 'react'
import {FaSearch} from 'react-icons/fa'
import '../styleHiddenSearchBar.css'
const HiddenSearchBar = () => {
    const [showInput, setShowInput] = React.useState(false);
    const [bgColor,setbgColor] = React.useState('white');
    const handleClick = (e) => {
        setbgColor('#1a1a1a');
        if(e.target.className === 'container'){
            setShowInput(false);
            setbgColor('white');
        }
    }
  return (
    <section className='container' style={{backgroundColor:bgColor}} onClick={handleClick}>
      {showInput? (
        <input type='text' placeholder='Seaarch...'/>
      ):(
        <FaSearch onClick={()=>setShowInput(true)}/>
      )}
    </section>
  )
}

export default HiddenSearchBar

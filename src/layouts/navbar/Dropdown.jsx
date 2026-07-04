import React from 'react'
import { palaces } from '../../context/Content'
 import { Link } from 'react-router-dom'


const Dropdown = () => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
  return (
    <div className='dropdown'>
      <ul className='dropdown ? "  '>
        {palaces.map((item, index) => (
          <li key={index} className='dropdown-item'>
            <Link to={item.link} onClick={()=>setDropdownOpen(false)}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
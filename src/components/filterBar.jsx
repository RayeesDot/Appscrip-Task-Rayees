import React, { useContext, useState } from 'react'
import '../assets/css/shop.css'
import '../assets/css/header.css'
import '../assets/css/FilterBar.css'
import Context from '../useContext/Store'
 


const FilterBar = () => {
    

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('RECOMMENDED');
  const {isOpen, toggleFilterDropdown} = useContext(Context)

  const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsDropdownOpen(false);
  };
  return (
    <div className='d-flex justify-content-center height-250'>
      <div className='container'>
        <div className='d-flex justify-content-center'>
          <div className='width-559 text-center p-4'>
            <p className='l-h-0 text-seie-50px'>DISCOVER OUR PRODUCTS</p>
            <p className='l-h-2'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
          </div>
        </div>

        <div>
       
        <div className="filter-bar">
            <div className="items-count">3425 ITEMS</div>
            <div className="filter-toggle">
                <span>&lt;</span> <div onClick={toggleFilterDropdown}>{isOpen ? 'HIDE FILTER' : 'SHOW FILTER'}</div>
            </div>
            <div className="sort-options" onClick={toggleDropdown}>
                <span>{selectedOption}</span> <span className="dropdown-arrow">&#9662;</span>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        {['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE : HIGH TO LOW', 'PRICE : LOW TO HIGH'].map(option => (
                            <div
                                key={option}
                                className={`dropdown-item ${selectedOption === option ? 'selected' : ''}`}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar

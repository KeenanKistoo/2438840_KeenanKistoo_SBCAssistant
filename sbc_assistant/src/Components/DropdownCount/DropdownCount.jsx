import React, { useState, useEffect, useRef } from 'react';
import '../DropdownCount/DropdownCount.css'


 function DropdownCount(props) {
    const [toggle, setToggle] = useState(true); //Stores the bool to identify whether the dropdown menu is open or not
    const dropdownRef = useRef(null); //Identiies the dropdown obj

    //If a user clicks away from the dropdown menu, it will close automatically.
    useEffect(() => {
        function handleDropdownRef(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setToggle(true);
            }
        }

        /*
            Lines 18-22: turns of the event listener of my rating options. The buttons may not be visible 
            but they are still present on the page. This means that unintended changes could occur, however, 
            these lines of code prevents this from happening.
        */
        document.addEventListener('click', handleDropdownRef);

        return () => {
            document.removeEventListener('click', handleDropdownRef);
        };
    }, []);

    //Opens or closes the dropdown rating menu
    function handleToggle() {
        setToggle(!toggle);
    }

    /* I needed to reference the rating as a parameter to access/change the selectedRating state
    from my Assistant.jsx. This function selects the rating */
    function handleCount(count) {
        props.setSelectedPlayerCount(count); // Use props.setSelectedRating to update state
        handleToggle();
        console.log(count);
    }

    return (
        <section className="dropdown" ref={dropdownRef}>
            <button className="toggle" onClick={handleToggle}>
                <span>{props.selectedPlayerCount ? props.selectedPlayerCount: 'No. of Available Cards'}</span>
                <span className='arrows'>{toggle ? '🠻' : '🠹'}</span>
            </button>
            <section className={`options ${toggle ? 'invisible' : ''}`}>
                {props.playerCount.map((count, index) => (
                    <button className='drop-btns' onClick={() => handleCount(count)} key={index}>{count}</button>
                ))}
            </section>
        </section>
    );
  }

  export default DropdownCount;

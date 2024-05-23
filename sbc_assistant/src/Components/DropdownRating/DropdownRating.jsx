import React, { useState, useEffect, useRef } from 'react';
import '../DropdownRating/DropdownRating.css';

export default function DropdownRating(props) {
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
    function handleRating(rating) {
        props.setSelectedRating(rating); // Use props.setSelectedRating to update state
        handleToggle();
        //console.log(rating);
    }

    return (
        <section className="dropdown" ref={dropdownRef}>
            <button className="toggle" onClick={handleToggle}>
                <span>{props.selectedRating ? props.selectedRating : 'SBC Rating'}</span>
                <span className='arrows'>{toggle ? '🠻' : '🠹'}</span>
            </button>
            <section className={`options ${toggle ? 'invisible' : ''}`}>
                {props.ratings.map((rating, index) => (
                    <button className={`drop-btns ${props.selectedRating === rating ? 'active' : '' }`} 
                    onClick={() => handleRating(rating)} key={index}>{rating}</button>
                ))}
            </section>
        </section>
    );
}

/* The basic structure was used from Jacob Broughton's YouTube Video (https://www.youtube.com/watch?v=qb70Epml9X0).
    This video was useful to give my dropdown basic functionality, however it did not use props. I had to alter the
    code to ensure that all my inputs/outputs were available to use in the assistant instead of having to constantly
    cross reference values. 

    I have chosen to not use a context system for this. The only two aspects which are affected are the two dropdown
    components and the assistants. I felt that props were efficient enough to control this. 
*/
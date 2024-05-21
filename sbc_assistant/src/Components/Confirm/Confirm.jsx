import React from 'react'
import '../Confirm/Confirm.css'
function Confirm(props) {

    return (
        <section className={`confirm-tab ${props.selectedRating !== null || props.selectedPlayerCount != null ? '' : 'invisible'}`}>
            <p className={`player-input-txt ${props.selectedRating !== null ? '' : 'invisible'}`}>
                {`Selected SBC Rating:  ${+ props.selectedRating} `}
            </p>
            <p className={`player-input-txt ${props.selectedPlayerCount !== null ? '' : 'invisible'}`}>
                {`Available Players:  ${+ props.selectedPlayerCount} `}
            </p>
            <button className={`confirm-btn ${props.selectedRating !== null && props.selectedPlayerCount != null ? '' : 'invisible'}`}>
                Confirm
            </button>
      </section>
    )
  }


  export default Confirm;

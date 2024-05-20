import React from 'react'
import '../Home/Home.css'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <> 
        <section className='homepage-bg'></section>
        <section className="info-sect">
            <p className='info-txt'>
                    Complete SBCs efficiently without wasting your high rated cards. 
                    Use the Assistant to build teams based on the player 
                    ratings available in your club.
            </p>
            <Link className='link-home' to='/assistant'>Go To Assistant→</Link>
        </section>
    </>
  )
}

export default Home;
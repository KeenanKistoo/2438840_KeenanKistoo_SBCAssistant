import React, { useState } from 'react';
import '../Theory/Theory.css';
import Essay from '../../Components/Essay/Essay';
import Planning from '../../Components/Planning/Planning';
import Thoughts from '../../Components/Thoughts/Thoughts';

function Theory() {
  const [activeSection, setActiveSection] = useState('Essay');

  return (
    <>
      <section className='theory-bg'></section>
      <main className="assist-sect">
        <section className="filter-sect">
          <button className="fil-btn" onClick={() => setActiveSection('Essay')}>Essay</button>
          <button className="fil-btn" onClick={() => setActiveSection('Planning')}>NetArt Planning</button>
          <button className="fil-btn" onClick={() => setActiveSection('Thoughts')}>Assistant Creation</button>
        </section>
        <article className="content-sect">
          {activeSection === 'Essay' && <Essay />}
          {activeSection === 'Planning' && <Planning />}
          {activeSection === 'Thoughts' && <Thoughts />}
        </article>
      </main>
    </>
  );
}

export default Theory;

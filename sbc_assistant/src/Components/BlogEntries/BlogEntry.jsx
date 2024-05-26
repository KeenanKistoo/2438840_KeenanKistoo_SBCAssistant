import React from 'react'
import '../BlogEntries/BlogEntry.css'

function BlogEntry(props) {
    const {displayElements} = props;

    function OpenLink(link){
        window.open(link, '_blank');
    }
    return (
      <>
      {displayElements.map((element, index) => (
        <article key={index} className="entry">
            <h3 className='head-blog'>{element.title}</h3>
            <img className='thumb-img' src={element.thumbnail} alt={element.alt} />
            <p className="date">{element.date}</p>
            <button onClick= {() => OpenLink(element.link)} className='link-btn'>Go To Link</button>
        </article>
        ))}
      </>
    )
  
}

export default BlogEntry;

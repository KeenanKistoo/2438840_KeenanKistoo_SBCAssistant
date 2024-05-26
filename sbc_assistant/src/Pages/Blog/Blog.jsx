import React from 'react'
import BlogEntry from '../../Components/BlogEntries/BlogEntry'
import '../Blog/Blog.css'
import PatchNotes from '../../Data/PatchNotes'
import CustomTactics from '../../Data/CustomTactic'

 function Blog() {

    return (
      <> 
      <section className='blog-bg'></section>
      <h2 className='sub'>Patch Notes</h2>
      <section className='link-frame'>
        <BlogEntry
        displayElements ={PatchNotes}/>
      </section>
      <h2 className='sub'>Custom Tactics</h2>
      <section className='link-frame'>
        <BlogEntry
        displayElements ={CustomTactics}/>
      </section>
        
      </>
    )
}

export default Blog;

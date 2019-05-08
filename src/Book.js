import React from 'react'

export const Book = ({title="no title provided", author="no author", pages=0, freeBookmark}) =>{
    return(
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no!' }</p>
        </section>
    )
}
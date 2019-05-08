import React from 'react'
import { render } from 'react-dom'
import Library from './Library'

let bookList = [
    {"title":"some book", "author":"some author", "pages":300},
    {"title":"some book", "author":"some author", "pages":200},
    {"title":"some book", "author":"some author", "pages":400},
]

render(
    <Library books={bookList} />,
    document.getElementById('root')
)
import React from 'react'
import './styles/pagination.css'

const Pagination = ({postPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++) {
        pageNumbers.push(i)
    }


  return (
    <nav>
        <ul className='pagination'>
            {
                pageNumbers.map(number => (
                    <li key={number} className='pagItem'>
                        <a onClick={(e) => paginate(number)} href="#/pokedex">{number}</a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination
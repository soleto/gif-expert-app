import React from 'react'

export const GifItem = ({ title, url, username }) => {
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        {title && <p>{ title }</p>}
        {username && <p>Autor: { username }</p>}
    </div>
  )
}

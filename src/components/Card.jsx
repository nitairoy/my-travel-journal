import React from 'react'

export default function Card(props) {
  return (
    <div>
    <div className="card">
        <img src={require(`../images/${props.coverImg}`)} alt="" className="card-image" />
        <div className="card-details">
            <img src={require(`../images/icon.png`)} className="icon-map"/>
            <span className="get-location">{props.location}</span>
            <span className='get-map'><a className='get-map' href={props.googleMap}>View on Google Map</a></span>
            <h1 className="card-title">{props.title}</h1>
            <span className='date'>{props.date}</span>
            <p className='card-text'>
                {props.description}
            </p>
        </div>
    </div>
    <hr />
    </div>
 
  )
}

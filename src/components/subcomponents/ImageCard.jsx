import React from 'react'

export default function ImageCard({ imagen }) {
  return (
    <div class="card" style={{width: "12rem"}}>
      <img src={imagen} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <button type="button" class="btn btn-danger">Me interesa</button>
      </div>
    </div>
  )
}

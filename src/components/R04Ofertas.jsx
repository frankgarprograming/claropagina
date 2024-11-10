import React from 'react'
import '../assets/css/myStyles.css'
import ImageCard from './subcomponents/ImageCard'
import img1 from './../assets/img/1.png'
import img2 from './../assets/img/2.png'
import img3 from './../assets/img/3.png'
import img4 from './../assets/img/4.png'
export default function R04Ofertas() {
  return (
    <div class="container myMargins">
      <div class="row">
        <div class="col">
          <ImageCard imagen={img1} />
        </div>
        <div class="col">
          <ImageCard imagen={img2}/>
        </div>
        <div class="col">
          <ImageCard imagen={img3}/>
        </div>
        <div class="col">
          <ImageCard imagen={img4}/>
        </div>
      </div>
    </div>
  )
}

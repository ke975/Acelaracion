
import React from "react";
import {useEffect, useState} from 'react'
import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
import { Divider } from "../components/divider";
import { Footer } from "../components/footer";
import axios from 'axios'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import {api} from '../services/api'
import '../styles/Carrousell.scss'



export function Reservation(props) {

  const [data,setData]=  useState([]);  
  const [id,setId]= useState(props.match.params.id)



  
  
  
  useEffect(()=>{
    const getInformation = async ()=>{
      await axios.get(api + "/places/" + id)
      
      .then((response)=>{
        console.log(response.data.places)
        setData(response.data.places)
        
      })
      .catch(()=>{
   console.log("erro:tente mais tarde")
      })
    }
    getInformation()
  
  },[id])
  

  return (
    <>
      <header>
        <Navbar />
      </header>
        <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={data.Images} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={data.Images1} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={data.Images2} alt="Third slide"/>
    </div>
  </div>
</div>
        </div>
      <h2 className="text-center text-secondary mt-4">
        Bienveidos a {data.namePlaces}
      </h2>
  

      <div className="contenedor mb-5 mt-5">
        <div className="row">

      
        <div className="col-md-6">
        <img
                src={data.Images}
                alt="Sunset and boats"
              />
        </div>
        <div className="col-md-6">
          <h2>{data.namePlaces}</h2>
          <p>{data.description}</p>
          </div>
      </div>
      </div>
      <Divider/>

      <h2 className="text-center mb-5">{data.namePlaces}</h2>
      <div className="contenedor mt-5">
        <div className="row mb-4">
          <div className="col-md-4">
            <div>
              <img
                src={data.Images}
                alt="Sunset and boats"
              />
                <h4 className="text-center">{data.namePlaces}</h4>
            </div>
          </div>
       
          <div className="col-md-4">
            <div>
            
              <img
                src={data.Images}
                alt={data.namePlaces}
              />
               <h4 className="text-center">{data.namePlaces}</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img
                src={data.Images1}
                alt={data.namePlaces}
              />
              <h4 className="text-center">{data.namePlaces}</h4>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div>
              <img
                src={data.Images2}
                alt="Sunset and boats"
              />
              <h4 className="text-center">{data.namePlaces}</h4>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div>
              <img
                src={data.Images3}
                alt={data.namePlaces}
              />

<h4>{data.namePlaces}</h4>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div>
              <img
                src={data.Images4}
                alt={data.namePlaces}
              />
              <h4 className="text-center">{data.namePlaces}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="contenedor mt-5 bg-gray mb-5">
    

<Divider/>

<div className="contenedor">
  <h3 className="text-center">Geolocalización de {data.namePlaces}</h3>
<iframe className=" mt-5 mb-5 col-md-12 col-sm-12" src={data.Geolocation}  allowfullscreen="" loading="lazy"
        width="1140" height="600"  
        />
</div>


<div className="contenedor">
<Contact/>
</div>

      </div>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

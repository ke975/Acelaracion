import "../styles/contenedor.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Divider } from "./divider";
import { IoStarHalfOutline } from "react-icons/io5";
import axios from "axios";
import { api } from "../services/api";



export function Card() {


  const [data, setData] = useState([]);

  const getPlaces = async () => {
    await axios
      .get(api)
      .then((response) => {
        console.log(response.data.places);
        setData(response.data.places);
      })
      .catch(() => {
        console.log("erro tende mas tarde");
      });
  };

  useEffect(() => {
    getPlaces();
  });


  
  return (
    <div>
      <div className="contenedor mt-5">
        <h2 className="text-center">Lugares de Nicaragua</h2>
        <div className="row ml-3 mt-5">
      {data.map((item)=>(

<div className="card m-2 col-xs-12" key={item.id}style={{ width: "20rem" }}>
<img
  src={item.Images}
  className="card-img-top"
  alt={item.namePlace}
/>
<div className="card-body">
  <h5 className="card-title">{item.namePlaces}</h5>
  <p className="card-text">
     {item.description}
  </p>
  <Link to={"/Reservation/" + item.id} className="btn btn-primary m-1">
    Contactanos
  </Link>
  <span>
  
<img src={item.PointPlace} style={{width:"2.5rem"}} alt="puntuacion" />

</span>

</div>
</div>




      ))}




      

        </div>
      </div>

      <Divider />

      <div className="contenedor">
        <h1 className=" text-center">Paquetes turisticos</h1>
        <div className="row m-3">
          <div className="card m-2 col-xs-12" style={{ width: "20rem" }}>
            <img
              src="https://lugaresturisticos365.com/wp-content/uploads/Reserva-Natural-Volcan-Mombacho.jpg"
              className="card-img-top"
              alt="Reserva Natural Volcán Mombacho"
            />
            <div className="card-body">
              <h5 className="card-title">Reserva Natural Volcán Mombacho</h5>
              <p className="card-text">
                Esta reserva es un verdadero tesoro natural, se encuentra
                envuelto en una boscosa vegetación, donde conviven diferentes
                especies de animales: mamíferos, reptiles, anfibios y aves.
              </p>
              <Link to="/Reservation" className="btn btn-primary ml-2">
                Contactanos
              </Link>
              <span>
              
              <IoStarHalfOutline size={"2.1rem"} color={"#ffd800"} />
              <IoStarHalfOutline size={"2.1rem"} color={"#ffd800"} />
              <IoStarHalfOutline size={"2.1rem"} color={"#ffd800"} />
              <IoStarHalfOutline size={"2.1rem"} color={"#ffd800"} />
            
            </span>
            </div>
          </div>
          <div className="card m-3 col-xs-12" style={{ width: "20rem" }}>
            <img
              src="https://lugaresturisticos365.com/wp-content/uploads/San-Juan-del-Sur.jpg"
              className="card-img-top"
              alt="San Juan del Sur"
            />
            <div className="card-body">
              <h5 className="card-title">San Juan del Sur</h5>
              <p className="card-text">
                Ella es perfecta para practicar surf debido a que en ella se
                forman las olas perfectas para este fin. En la noche puedes
                salir y visitar cualquiera de sus bares, tomar unos tragos y
                disfrutar de buena música
              </p>
              <Link to="/Reservation" className="btn btn-primary ml-2">
                Contactanos
              </Link>
              <span>
              
              <IoStarHalfOutline size={"2.1rem"} color={"#ffd800"} />
              <IoStarHalfOutline size={"2.1rem"} color={"#ffd800"} />
              <IoStarHalfOutline size={"2.1rem"} color={"#ffd800"} />
              <IoStarHalfOutline size={"2.1rem"} color={"#ffd800"} />
            
            </span>
            </div>
          </div>
          <div className="card m-2 col-xs-12 " style={{ width: "20rem" }}>
            <img
              src="https://www.adonde-y-cuando.es/site/images/illustration/matagalpa.jpg"
              className="card-img-top"
              alt="Matagalpa"
            />
            <div className="card-body">
              <h5 className="card-title">Matagalpa</h5>
              <p className="card-text">
                Es una de las ciudades más acogedoras de Nicaragua, lo que más
                atrae son sus espacios naturales que poseen una belleza sin
                igual. Acá te podrás olvidar del bullicio de la ciudad y
                conectarte con la naturaleza.
              </p>
              <Link to="/Reservation" className="btn btn-primary ml-2">
                Contactanos
              </Link>
              <span>
              
              <IoStarHalfOutline size={"2.1rem"} color={"#ffd800"} />
              <IoStarHalfOutline size={"2.1rem"} color={"#ffd800"} />
              <IoStarHalfOutline size={"2.1rem"} color={"#ffd800"} />
              <IoStarHalfOutline size={"2.1rem"} color={"#ffd800"} />
            
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

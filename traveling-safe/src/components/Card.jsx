import "../styles/contenedor.scss";
import { Link } from "react-router-dom";
import { Divider } from "./divider";
import { IoStarHalfOutline } from "react-icons/io5";
export function Card() {
  return (
    <div>
      <div className="contenedor mt-5">
        <h2 className="text-center">Lugares de Nicaragua</h2>
        <div className="row ml-3 mt-5">
          <div className="card m-2 col-xs-12" style={{ width: "20rem" }}>
            <img
              src="https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/M/MGAHFHF/MGAHFHF_quicklook_full_pool.jpg"
              className="card-img-top"
              alt="Hilton Princess Managua"
            />
            <div className="card-body">
              <h5 className="card-title">Hilton Princess Managua</h5>
              <p className="card-text">
                Es una magnífica elección para viajeros que vayan a Managua, ya
                que ofrece un ambiente para familias además de numerosos
                servicios diseñados para mejorar su estancia.
              </p>
              <Link to="/Reservation" className="btn btn-primary m-1">
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

          <div className="card m-2 col-xs-12" style={{ width: "20rem" }}>
            <img
              src="https://img.directhotels.com/ni/managua/barcelo-montelimar-beach-managua/1.jpg"
              className="card-img-top"
              alt="Barcelo Montelimar"
            />
            <div className="card-body">
              <h5 className="card-title">Barceló Montelimar</h5>
              <p className="card-text">
                Se encuentra en un enclave privilegiado de Nicaragua, en primera
                línea de playa rodeado de una impresionante y exuberante
                vegetación tropical desde donde se puede disfrutar de los
                mejores atardeceres del Pacífico.
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

          <div className="card m-2 col-xs12" style={{ width: "20rem" }}>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/20/05/05/dc/magnific-rock-surf-resort.jpg?w=900&h=-1&s=1"
              className="card-img-top"
              alt="Magnific Rock - Surf Resort & Yoga Retreat"
            />
            <div className="card-body">
              <h5 className="card-title">
                Magnific Rock - Surf Resort & Yoga Retreat
              </h5>
              <p className="card-text">
                Este hotel informal ubicado en un acantilado con vista a la
                playa Popoyo y al océano Pacífico está a 12 minutos a pie de la
                playa Santana y a 11 km del aeropuerto Costa Esmeralda.
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

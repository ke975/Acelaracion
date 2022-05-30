import React from "react";

import { Navbar } from "../components/Navbar";

import { Contact } from "../components/Contact";
import { Footer } from "../components/footer";
import { Touroperator } from "../components/TourOperator";
import { IoStarHalfOutline } from "react-icons/io5";
import { Divider } from "../components/divider";
import {Carroussel} from "../components/carrousell";
export function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
      <Carroussel/>
      </div>

      <section>
        <h2 className="text-center mt-5">
          {" "}
          <strong>
            {" "}
            Lugares mas frecuentados <br /> de
            <br /> Nicaragua{" "}
          </strong>
        </h2>
      </section>
      <Divider/>
     
      <div className="container mt-3">
        <a href="">
          <figure>
            <img
              className='data-toggle="tooltip '
              title="San Juan del sur"
              src="https://lugaresturisticos365.com/wp-content/uploads/San-Juan-del-Sur.jpg"
              alt="A windmill"
            />
          </figure>
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          possimus laboriosam voluptatibus sed. Cum nihil fugiat id quaerat,
          cupiditate dolores corrupti, soluta quidem quam modi incidunt
          laboriosam tempora maiores magnam!{" "}
          <span>
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <button className="btn btn bg-primary text-white m-3"> Reserva ahora</button>
          </span>
        </p>
        

        <a href="">
          <figure>
            <img
              className='data-toggle="tooltip '
              src="https://www.adonde-y-cuando.es/site/images/illustration/matagalpa.jpg"
              alt="The Clifton Suspension Bridge"
              title="Ciudad de Matagalpa"
            />
          </figure>
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          possimus laboriosam voluptatibus sed. Cum nihil fugiat id quaerat,
          cupiditate dolores corrupti, soluta quidem quam modi incidunt
          laboriosam tempora maiores magnam!{" "}
          <span>
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <button className="btn btn bg-primary text-white m-3"> Reserva ahora</button>
          </span>
        </p>
        <a href="">
          <figure>
            <img
              src="https://lugaresturisticos365.com/wp-content/uploads/Reserva-Natural-Volcan-Mombacho.jpg"
              alt="Sunset and boats"
            />
          </figure>
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          possimus laboriosam voluptatibus sed. Cum nihil fugiat id quaerat,
          cupiditate dolores corrupti, soluta quidem quam modi incidunt
          laboriosam tempora maiores magnam!{" "}
          <span>
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <button className="btn btn bg-primary text-white m-3"> Reserva ahora</button>
          </span>
        </p>
        <a href="">
          <figure>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/20/05/05/dc/magnific-rock-surf-resort.jpg?w=900&h=-1&s=1"
              alt="a river in the snow"
            />
          </figure>
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          possimus laboriosam voluptatibus sed. Cum nihil fugiat id quaerat,
          cupiditate dolores corrupti, soluta quidem quam modi incidunt
          laboriosam tempora maiores magnam!{" "}
          <span>
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <button className="btn btn bg-primary text-white m-3"> Reserva ahora</button>
          </span>
        </p>
        <a href="">
          <figure>
            <img
              src="https://img.directhotels.com/ni/managua/barcelo-montelimar-beach-managua/1.jpg"
              alt="a single checked balloon"
            />
          </figure>
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          possimus laboriosam voluptatibus sed. Cum nihil fugiat id quaerat,
          cupiditate dolores corrupti, soluta quidem quam modi incidunt
          laboriosam tempora maiores magnam!{" "}
          <span>
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <button className="btn btn bg-primary text-white m-3"> Reserva ahora</button>
          </span>
        </p>

        <a href="">
          <figure>
            <img
              src="https://img.directhotels.com/ni/managua/barcelo-montelimar-beach-managua/1.jpg"
              alt="a single checked balloon"
            />
          </figure>
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          possimus laboriosam voluptatibus sed. Cum nihil fugiat id quaerat,
          cupiditate dolores corrupti, soluta quidem quam modi incidunt
          laboriosam tempora maiores magnam!{" "}
          <span>
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <IoStarHalfOutline size={"2.5rem"} color={"#ffd800"} />
            <button className="btn btn bg-primary text-white m-3"> Reserva ahora</button>
          </span>
        </p>
      </div>
      <Divider/>
      <Touroperator />
      <Contact />

      <Footer />
    </div>
  );
}

import React from "react";

import { Navbar } from "../components/Navbar";
import { Form } from "../components/form";
import { Carroussel } from "../components/carrousell";
import { Contact } from "../components/Contact";
import { Divider } from "../components/divider";
import { Footer } from "../components/footer";

export function Reservation() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Carroussel />
      <h2 className="text-center text-secondary mt-4">
        ¡Bienvenido a nuestro <br /> sistema de Reservaciones!
      </h2>
      <div className="contenedor mt-5">
        <div className="row mb-4">
          <div className="col-md-4">
            <div>
              <img
                src="https://lugaresturisticos365.com/wp-content/uploads/Reserva-Natural-Volcan-Mombacho.jpg"
                alt="Sunset and boats"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img
                src="https://lugaresturisticos365.com/wp-content/uploads/Reserva-Natural-Volcan-Mombacho.jpg"
                alt="Sunset and boats"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img
                src="https://lugaresturisticos365.com/wp-content/uploads/Reserva-Natural-Volcan-Mombacho.jpg"
                alt="Sunset and boats"
              />
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div>
              <img
                src="https://lugaresturisticos365.com/wp-content/uploads/Reserva-Natural-Volcan-Mombacho.jpg"
                alt="Sunset and boats"
              />
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div>
              <img
                src="https://lugaresturisticos365.com/wp-content/uploads/Reserva-Natural-Volcan-Mombacho.jpg"
                alt="Sunset and boats"
              />
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div>
              <img
                src="https://lugaresturisticos365.com/wp-content/uploads/Reserva-Natural-Volcan-Mombacho.jpg"
                alt="Sunset and boats"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="contenedor mt-5 bg-gray mb-5">
      <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label forLabel="inputEmail4">Nombre Completo</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Nombres Completo"/>
    </div>
    <div className="form-group col-md-6">
      <label forLabel="inputPassword4">Email</label>
      <input type="email" className="form-control" id="inputPassword4" placeholder="Email"/>
    </div>
  </div>
  <div className="form-group">
    <label forLabel="inputAddress">Dirección</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Dirección"/>
  </div>
  <div className="form-group ">
      <label forLabel="inputState">Habitaciones</label>
      <select id="inputState" className="form-control">
        <option selected>Escoja el tipo de habitación</option>
        <option>1 cama</option>
        <option>2 cama</option>
        <option>3 cama</option>
        <option>4 cama</option>
      </select>
    </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label forLabel="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label forLabel="inputState">Departamentos</label>
      <select id="inputState" className="form-control">
        <option selected>Departamentos</option>
        <option>Estelí</option>
        <option>Masaya</option>
        <option>Granada</option>
        <option>Managua</option>
        <option>León</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label forLabel="inputZip">Precios</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" forLabel="gridCheck">
    Estoy de acuerdo con los terminos y condiciones
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Reservar</button>
</form>
<Divider/>

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

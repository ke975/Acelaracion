import React from "react";
import { Contact } from "../components/Contact";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import { Card } from "../components/Card";

import {Divider} from '../components/divider'
import { Carroussel } from "../components/carrousell";


export function Places() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

    <div>
    <Carroussel/>
    </div>


 

      <section className="contenedor">
        <h2 className="ml-5 mt-5">Diversion al maximo con nustros paquetes Turisiticos.</h2>
    <div className="row mt-5 m-4">
        <div className="ml-5">
        <img src="https://cdn-icons-png.flaticon.com/512/1475/1475996.png" style={{width:"10rem"}} alt="" />
        <h4 className="ml-5">Hoteles</h4>
        </div>
           <div className="ml-5">
        <img className="ml-3" src="https://cdn-icons-png.flaticon.com/512/3170/3170733.png" style={{width:"10rem"}} alt="" />
        <h4 className="ml-3">Restaurantes</h4>
        </div>
        <div className="ml-5">
        <img className="ml-3" src="https://cdn-icons.flaticon.com/png/512/669/premium/669969.png?token=exp=1648104052~hmac=6d6c94de6f45c2ce05c0ef977dbe32ef" style={{width:"10rem"}} alt="" />
        <h4 className="ml-5">Playas</h4>
        </div>
        <div className="ml-5">
        <img className="ml-3" src="https://cdn-icons.flaticon.com/png/512/677/premium/677498.png?token=exp=1648104155~hmac=4010de000471c0a6e68bc8feebad855e" style={{width:"10rem"}} alt="" />
        <h4 className="ml-5">Bares </h4>
        </div>
        </div>

      </section>
        <Divider/>
      <Card />
      <Divider/>
      <section>
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

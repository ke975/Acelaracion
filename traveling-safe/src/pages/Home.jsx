import React from "react";

import { Navbar } from "../components/Navbar";

import { Contact } from "../components/Contact";
import { Footer } from "../components/footer";
import { Touroperator } from "../components/TourOperator";
import { IoStarHalfOutline } from "react-icons/io5";
import { Divider } from "../components/divider";
import {Carroussel} from "../components/carrousell";
import {Card} from '../components/Card'
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
     
<Card/>
      
          

        

        
      <Divider/>
      <Touroperator />
      <Contact />

      <Footer />
    </div>
  );
}

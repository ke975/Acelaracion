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

    
      <Divider/>
     
<Card/>
      
          

        

        
      <Divider/>
      <Touroperator />
      <Contact />

      <Footer />
    </div>
  );
}

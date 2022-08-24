import '../styles/banneer.scss'
import mail from '../assets/mail.png'
import telefono from '../assets/telefono.png'
import mapa from '../assets/mapa.png'
export function Contact(){
    return(
       <>
<section className='Contact '>
<div className='info'>
  <h2>Entra en contacto <br/>con nosotros.!</h2>
  <p>Conoce nuestras promociones, <br/> descubre Nicaragua, y apasionate<br/> con las
  maravillas que tiene nuestro país.
  </p>

  <button className='btn-btn btn-warning'>
  <a href="https://api.whatsapp.com/send?1=es&phone=58549438">Whatsapp</a>

  </button>
</div>


<div className='callin'>

  <div>
  <img  className='icon' src={telefono} alt="" />
  <span>(+505)5854-9438</span>
  </div>

  <div>
  <img className='icon' src={mapa} alt="" />
  <span>Esteli/Nicaragua, De los Semaforos de enabas 1 cuadra al este y media cuadra al sur</span>
  </div>
   <div>
  <img  className='icon' src={mail} alt="" />
  <span>travelingsafe@gmail.com</span>
  </div>
</div>
</section>
</> 
    )
}
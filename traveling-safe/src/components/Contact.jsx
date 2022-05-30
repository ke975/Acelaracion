import '../styles/banneer.scss'

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
  <img  className='icon' src="https://cdn-icons.flaticon.com/png/512/4213/premium/4213204.png?token=exp=1641599538~hmac=13dfd58342c406b4796b552b7105b0b7" alt="" />
  <span>(+505)5854-9438</span>
  </div>

  <div>
  <img className='icon' src="https://cdn-icons-png.flaticon.com/128/4643/4643972.png" alt="" />
  <span>Esteli/Nicaragua, De los Semaforos de enabas 1 cuadra al este y media cuadra al sur</span>
  </div>
   <div>
  <img  className='icon' src="https://cdn-icons.flaticon.com/png/128/3178/premium/3178232.png?token=exp=1641601032~hmac=a3217315db96be0e087cf773b89afe96" alt="" />
  <span>travelingsafe@gmail.com</span>
  </div>
</div>
</section>
</> 
    )
}
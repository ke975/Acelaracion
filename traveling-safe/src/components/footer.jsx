import '../styles/footer.scss'

export function Footer(){
return(
    <>
    <footer>
        <div className="contenido-footer">

            <div className='info'>
            <h1 className='text-white'>Traveling-Safe</h1>
        <span className='text-white'>&copy; Copyright 2022</span> 
        <p className='text-white'>Todos los Derechos Reservados</p>
            </div>
      
            <div className='Social'>

           <a href=""> <img src="https://cdn-icons.flaticon.com/png/128/1236/premium/1236842.png?token=exp=1641594195~hmac=674e8636e87f3b8ba5e47bbf8a723eac" alt="" /></a>
           <a href="">  <img src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png" alt="" /></a>
           <a href="">  <img src="https://cdn-icons.flaticon.com/png/128/739/premium/739257.png?token=exp=1641594195~hmac=c40b3fa2c3ae19a4fb1c1da7cc7983f3" alt="" /></a>
    
          
            </div>


        </div>
    </footer>


    </>
)



}

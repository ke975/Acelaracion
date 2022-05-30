import '../styles/TourOperator.scss'


export function Touroperator(){
    return(
        <div>
               <h1 className="text-center mt-5">Tour Operadoras</h1>
            <div className="contenedor mt-5">
             <div className="operator">
                <div className="enterprise">
                  
                    <img src="https://www.ctisoluciones.com/sites/default/files/import/article/Por-qu%C3%A9-contrata-soluciones-de-call-center-para-tu-empresa.jpg" alt="" />
                </div>
                <div className="descriptionoperator">
                <h2>Tour Operadora El Tisey</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum blanditiis distinctio nihil ducimus, impedit dolorum rerum eligendi corrupti alias beatae ab delectus consequuntur qui fugiat libero doloremque eaque dicta eveniet!</p>
                <button className='btn btn-warning' >  <a href="https://api.whatsapp.com/send?1=es&phone=58549438">Whatsapp</a></button>
                </div>
                
             </div>
             <div className="operator">
                <div className="enterprise">
                <div className="descriptionoperator">
                <h2>Tour Operadora El Tisey</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum blanditiis distinctio nihil ducimus, impedit dolorum rerum eligendi corrupti alias beatae ab delectus consequuntur qui fugiat libero doloremque eaque dicta eveniet!</p>
                <button className='btn btn-warning' >  <a href="https://api.whatsapp.com/send?1=es&phone=58549438">Whatsapp</a></button>
                </div>
                  
                    <img src="https://www.ctisoluciones.com/sites/default/files/import/article/Por-qu%C3%A9-contrata-soluciones-de-call-center-para-tu-empresa.jpg" alt="" />
                </div>
                
             </div>
            </div>
            <hr className="mt-3 dashed contenedor"/>
        </div>
    )
}
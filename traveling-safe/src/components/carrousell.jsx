import '../styles/Carrousell.scss'

export  function Carroussel(){
    return(
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://www.visitcentroamerica.com/wp-content/uploads/2020/02/ver-centroamerica-nicaragua-volc%C3%A1n-cerro-negro-06.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.pexels.com/photos/5274755/pexels-photo-5274755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.adonde-y-cuando.es/site/images/illustration/matagalpa.jpg" alt="Third slide"/>
    </div>
  </div>
</div>
    )
}
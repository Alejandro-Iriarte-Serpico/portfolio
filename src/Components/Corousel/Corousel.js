import React,{useState} from 'react';
import '../../Icons/style.css'
import '../Corousel/Corousel.scss';
import { Carousel } from 'react-bootstrap';
/**Images Corousel */
import ImageActities from '../../images/projectFigma/Actividades.png'
import ImageSpecificWorkingArea from '../../images/projectFigma/Area de trabajo especifica.png'
import ImageWorkingArea from '../../images/projectFigma/Area de Trabajo.png'
import ImageMockup1 from '../../images/projectFigma/borrador 1.png'
import ImageMockup2 from '../../images/projectFigma/borrador1.2.png'
import ImageCreateEmployee from '../../images/projectFigma/Crear nuevo empleado.png'
import ImageCreateProject from '../../images/projectFigma/Crear Proyecto.png'
import ImageEditEmployee from '../../images/projectFigma/Editar empleado.png'
import ImageAsessing from '../../images/projectFigma/Evaluacion.png'
import ImageHomeAdm from '../../images/projectFigma/Inicio Adm.png'
import ImageHome from '../../images/projectFigma/Inicio.png'
import ImageAchivements from '../../images/projectFigma/Logros.png'
import ImageNavbar from '../../images/projectFigma/nav bar.png'
import ImageLogin from '../../images/projectFigma/Pagina de Login.png'
import ImageProfile from '../../images/projectFigma/Perfil.png'
import ImageMockup3 from '../../images/projectFigma/mockup3.jpg'
import ImageMockup4 from '../../images/projectFigma/mockup4.jpg'
import ImageMockup5 from '../../images/projectFigma/Mockup5.jpg'
import ImagePlanification from '../../images/projectFigma/Planificacion.png'
import ImageStatistics from '../../images/projectFigma/Seccion Estadisticas.png'



function Corousel(props) {


  const [show, setShow] = useState(true);
  const Images=[ImageActities,ImageSpecificWorkingArea,ImageWorkingArea,
  ImageMockup1,ImageMockup2,ImageCreateEmployee,ImageCreateProject,ImageEditEmployee,
  ImageAsessing,ImageHomeAdm,ImageHome,ImageAchivements,ImageNavbar,ImageLogin,ImageProfile,
  ImageMockup3,ImageMockup4,ImageMockup5,ImagePlanification,ImageStatistics];

  const corouselItem = Images.map(image => {
  return(<Carousel.Item key={image.toString()} className='sizeItem align-self-center'>
  <img
    className="d-block w-100 img"
    src={image}
    alt="."
    
       />
  
</Carousel.Item>)

});


  const handleClick=()=>{

    props.showCorousel();
    setShow(!show);
   

  }

    return (
      <div className={ show?'containerPicturesProject':'noDisplay'}>


<span onClick={handleClick  } className='icon-x x-Icon' ></span>


<Carousel fade interval={null}  className= 'sizeCorousel d-flex align-items-center align-content-center ' >
  
  
{corouselItem}
 
  
</Carousel>
   

    </div>
    )
}

export default Corousel;

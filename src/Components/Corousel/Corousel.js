import React,{useState} from 'react';
import '../../Icons/style.css'
import '../Corousel/Corousel.scss';
import { Carousel } from 'react-bootstrap';



function Corousel(props) {


  const [show, setShow] = useState(true);
  


  const corouselItem = props.corousel.map(image => {
  return(<Carousel.Item key={image.toString()} className='sizeItem align-self-center '>

  
  <img className="d-block w-100 img"    src={image}    alt="."  /> 
   


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

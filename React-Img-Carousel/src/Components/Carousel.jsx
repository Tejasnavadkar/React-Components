import { useState } from "react";
import "./Carousel.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({slides}) =>{

   const [slide,setSlide] = useState(0)

   const nextSlide = () =>{

    setSlide( slide == slides.length - 1 ? 0 : slide + 1)  // for infinite sliding

   }

   const previousSlide = () =>{
    setSlide( slide == 0 ? slides.length - 1 : slide - 1)
   }

    return (
        <div className="carousel">
            {/* <BsArrowLeftCircleFill className={`arrow arrowLeft ${slide === 0 ? 'arrow-inactive' : ''}`} onClick={previousSlide}/> to disable the button */}  
            <BsArrowLeftCircleFill className={`arrow arrowLeft`} onClick={previousSlide}/>
           {slides?.map((item,idx)=>{
            return <img src={item.src} alt={item.alt} key={idx} className={slide == idx ? 'slide' : 'slide-hidden'} />
           })}
           <BsArrowRightCircleFill className={`arrow arrowRight`} onClick={nextSlide} />
           {/* <BsArrowRightCircleFill className={`arrow arrowRight ${slide === slides.length - 1 ? 'arrow-inactive' : ''}`} onClick={nextSlide} /> */}
           <span className="indicators">  {/* for navigation dots */}
                {slides.map((_,idx)=>{
                    return <button key={idx} className={` ${idx === slide ? 'indicator' : 'indicator indicator-inactive'}`} onClick={()=>setSlide(idx)} ></button>
                })}
           </span>
        </div>
    )
}

export default Carousel
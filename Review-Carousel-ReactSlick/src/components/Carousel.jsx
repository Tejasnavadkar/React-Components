
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//React slick is a carousel component built with React. It is a react port of slick carousel

const Carousel = () => {

    const Settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

    return (
        <>
            <div className=" border border-red-700 mt-20 ">
                <Slider {...Settings}>
                    {Data.map((item, idx) => (

                        <div key={idx} className="flex flex-col h-[450px]  max-w-2xl ">
                            <div className="bg-indigo-600 flex justify-center items-center rounded-t-xl h-56">
                                <img src={item.img} alt="" className="rounded-full h-40 w-40 object-cover" />
                            </div>

                            <div className="bg-white  flex flex-col  justify-center items-center rounded-b-xl h-56">
                                <div className=" text-center">{item.name}</div>
                                <div className=" text-center">{item.description}</div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}


const Data = [
    {
        name: 'jhone conner',
        img: `https://imgs.search.brave.com/rHEoKt1HvbwBOiSdaCYiYVCUtCk_dWz47h_2s374Ups/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlzdGNoYWxsZW5n/ZXMuY29tL2YvaXRl/bXMvMGYzMmFjNjIt/ZWFlNC00MmE0LWJm/MzAtMzZmYTNhNmVi/NzI4LmpwZw`,
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque minus omnis maxime cum delectus voluptatem eos laboriosam cupiditate vitae explicabo!'
    },

    {
        name: 'jhone ',
        img: `https://imgs.search.brave.com/Mpac-KOW2uEx8_Ot8ajvzF8kaqCCZRVozZ-SkZnfujQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzc1Lzc4Lzk5/LzM2MF9GXzY3NTc4/OTk0M18yMDR3dFh2/YlMxa0JUd2JDNGhO/N2tVSGNtRGN0OVIw/di5qcGc`,
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque minus omnis maxime cum delectus voluptatem eos laboriosam cupiditate vitae explicabo!'
    },

    {
        name: 'Adam conner',
        img: `https://imgs.search.brave.com/NaPjVEfdPGY5GdiVHpsRkfEDiUQ21dSnn3fkrv-d3W4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/NTY1MjE4L3Bob3Rv/L2ZpbmdlcnMtY3Jv/c3NlZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9TVBCWmNX/a3ZOdlkwQ2E4eGty/ajgwelB2ZDd5QjBa/MW9LZENEY29Gcm83/cz0`,
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque minus omnis maxime cum delectus voluptatem eos laboriosam cupiditate vitae explicabo!'
    },
    {
        name: 'Henry',
        img: `https://imgs.search.brave.com/cjdi8mWqWLIkzPf9IXWn9Tu8cJUiyAGMxQcrU_NEQ7E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWct/Y2RuLnRoZXB1Ymxp/dmUuY29tL2ZpdC1p/bi8xMjgweDcyMC9m/aWx0ZXJzOmZvcm1h/dCh3ZWJwKS93aW9u/L21lZGlhL3Bvc3Rf/YXR0YWNobWVudHMv/ZmlsZXMvMjAyNC8x/Mi8xMC80NzA1MDEt/ZG93bmxvYWQtOC5q/cGc`,
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque minus omnis maxime cum delectus voluptatem eos laboriosam cupiditate vitae explicabo!'
    },

    {
        name: 'Henry cavil;',
        img: `https://imgs.search.brave.com/A1-Fdu7VV9-AgV3GO5IqRWd4PFv_YAzZWtVMwd2K-ac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzU0L0hlbnJ5X0Nh/dmlsbF8oMjg0ODc0/OTgwNTIpXyhjcm9w/cGVkKS5qcGc`,
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque minus omnis maxime cum delectus voluptatem eos laboriosam cupiditate vitae explicabo!'
    }
]

export default Carousel
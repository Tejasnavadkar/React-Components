
interface cardTypes{
    img:string,
    title:string
}

export const ProductCard = ({img,title}:cardTypes) =>{

    return <div style={{display:'flex', flexDirection:'column',margin:'0.5rem', width:'200px', border:'2px solid'}}>
             <img src={`${img}`} style={{height:'10rem',width:'10rem'}} alt={title} />  
             <span>{title}</span>
    </div>
  }
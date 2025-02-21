import { Plus, Minus } from 'lucide-react'

interface props {
    item:{
        question:string,
        answer:string
    },
    onClick:()=>void,
    isOpen:boolean
}

const Accordion = ({ item,onClick,isOpen }:props) => {

    const Icon = isOpen ? Minus : Plus

    return (

        <>
            <div onClick={onClick} className=' w-1/3 flex flex-col bg-gray-300 px-3 rounded-lg py-4'>
                <div className='flex items-center  justify-between '>
                    <div className='font-bold text-xl'>{item.question}</div>
                    <div><Icon size={20} /></div>
                </div>
                <div className={`overflow-y-hidden ${isOpen ? '' : 'h-0'} `}>
                    <p>{item.answer}</p>
                </div>
            </div>
        </>

    )
}

export default Accordion
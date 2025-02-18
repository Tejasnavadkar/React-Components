import React, { useState } from "react"


interface step {
    label: string,
    description: string
}

interface stepperProps {
    steps: step[]
}

const Stepper: React.FC<stepperProps> = ({ steps }) => {

    const [activeState, setActiveState] = useState(0)

    return (
        <div className="py-2">
            {activeState}
            <div className="flex justify-evenly ">
                {steps.map((step, idx) => {
                    return <div key={idx} className={`flex flex-col items-center justify-center border px-10 ${activeState === idx ? 'bg-green-300' : (idx < activeState ? 'bg-green-800 text-white' : '')} `}>
                        <div className="text-lg">
                            {step.label}
                        </div>
                        {idx === activeState && (
                            <div className="text-sm">
                                {step.description}
                            </div>
                        )}
                    </div>
                })}
            </div>
            <div className="flex justify-between px-4">
                <button
                    className={`px-4 py-1  rounded-md mt-4 cursor-pointer disabled:opacity-0 ${activeState === 0 ? 'bg-gray-400 ' : 'bg-green-300'} `}
                    onClick={() => setActiveState(activeState - 1)}
                    disabled={activeState === 0}
                >
                    Back
                </button>
                <button
                    className={`px-4 py-1  rounded-md mt-4 cursor-pointer disabled:opacity-0 ${activeState === steps.length - 1 ? 'bg-gray-400 ' : 'bg-green-300'} `}
                    onClick={() => setActiveState(activeState + 1)}
                    disabled={activeState === steps.length - 1}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Stepper
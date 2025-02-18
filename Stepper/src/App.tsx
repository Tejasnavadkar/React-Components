import Stepper from "./Components/Stepper"


function App() {
 
  const steps = [
    {
      label: "Information",
      description: "Fill your data",
    },
    {
      label: "Information",
      description: "description",
    },
    {
      label: "Information",
      description: "rules",
    },
    {
      label: "Information",
      description: "Create",
    },
    {
      label: "Information",
      description: "Establish",
    },
    {
      label: "Information",
      description: "Add custom",
    },
    {
      label: "Information",
      description: "rights",
    },
  ];

  return (
    <>
     <div className="p-4">
         <Stepper steps={steps}/>
     </div>
    </>
  )
}

export default App

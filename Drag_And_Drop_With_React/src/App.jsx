
import './App.css'
import DragAndDrop from './Components/DragAndDrop';

function App() {
  
  const initialData = {
  Todo: [
    "Design UI mockups",
    "Set up project repository",
    "Write unit test",
    "Integrate payment gateway",
  ],
  "In Progress": ["Develop authentication flow", "Implement responsive design"],
  Completed: [
    "Set up CI/CD pipeline",
    "Conduct code reviews",
    "Deploy initial version to staging",
  ],
};

  return (
    <>
     <div>
       <DragAndDrop initialData={initialData} />
     </div>
    </>
  )
}

export default App

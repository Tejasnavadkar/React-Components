
import './App.css'
import Stepper from './component/Stepper'

function App() {

  const Steps = [
    {
      name: "Customer Info",
      Component: () => <div>Provide your contact details.</div>,
    },
    {
      name: "Shipping Info",
      Component: () => <div>Enter your shipping address.</div>,
    },
    {
      name: "Payment",
      Component: () => <div>Complete payment for your order.</div>,
    },
    {
      name: "Delivered",
      Component: () => <div> Your order has been delivered.</div>,
    },
  ]

  return (
    <>
      <Stepper Steps={Steps}  />
    </>
  )
}

export default App

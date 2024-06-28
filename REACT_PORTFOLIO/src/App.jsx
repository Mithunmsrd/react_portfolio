// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Navbar from './component/Navbar'
import Details from './component/Details'
import Name from './component/Name'
import Img from './component/Img'
import Table from './component/Table'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Name/>
    <Details/>
    <Img/>
   <Table/>

    </>
  )
}

export default App

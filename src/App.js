import React from 'react'
import Home from './components/home'
import Details from './components/details'
import Header from './components/header'
import Parts from './components/Parts'
import ControlledBoard from './components/ControlledBoard'
import Collection from './components/CollecProps'
import Footer from './components/Footer'
import Drag from './components/Drag_Drop'

function App() {
  return (
    <>
       <Header/>
       <Home/>
       <Details/>
       <Parts/>


      <div className="Drag">
      <ControlledBoard />
      </div>

      <Collection/>

      <Footer/>
    </>
  );
}

export default App;

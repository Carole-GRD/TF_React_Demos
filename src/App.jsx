import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import fruitData from './data/fruits.json';
import peopleData from './data/people.json';

// import Welcome from './components/welcome/welcome';
// import LuckyNumber from './components/lucky-number/lucky-number';
// import PersonCondition from './components/person-condition/person-condition';
// import FruitList from './components/fruit-list/fruit-list';
// import PeopleTable from './components/people-table/people-table';
// import Multi3 from './components/multi-3/multi-3';
// import TemperatureForm from './components/temperature-form/temperature-form';
import Counter from './containers/counter/counter';
import CounterEffect from './components/counter-effect/counter-effect';
import DemoEffect from './containers/counter-effect/demo-effect';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Demos</h1>

      {/* <h2>Demo 01 - Les composants</h2>
      <Welcome name='Della' />
      <LuckyNumber /> */}

      {/* <h2>Demo 02 - Les conditions</h2>
      <PersonCondition gender='F' firstname='Carole' lastname='Gérard' />
      <PersonCondition gender='M' firstname='Geoffrey' lastname='Gillet' />
      <PersonCondition gender='X' firstname='Donald' lastname='Duck' /> */}

      {/* <h2>Demo 03 - Les collections</h2>
      <FruitList fruits={fruitData} />
      <PeopleTable people={peopleData}/> */}

      {/* <h2>Demo 04 - Le state</h2>
      <Multi3 /> */}

      {/* <h2>Demo 05 - Les formulaires</h2>
      <TemperatureForm />
      <TemperatureForm /> */}

      {/* <h2>Demo 06 - Communication entre composants</h2>
      <Counter /> */}

      <h2>Demo 07 - Cycle de vie</h2>
      <DemoEffect />
    </div>
  )
}

export default App

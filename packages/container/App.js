import React from 'react'
import {mount} from "marketing/MarketingApp";
import MarketingApp from './src/components/MarketingApp';

const App = () => {
  return (
    <div>
      <h1>Container App</h1>
      <hr />
      <MarketingApp />
    </div>
  )
}

export default App
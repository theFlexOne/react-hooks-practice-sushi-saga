import React, { useEffect, useState } from 'react';
import SushiContainer from './SushiContainer';
import Table from './Table';

function App() {
  let [plates, setPlates] = useState([]);
  const [moneyRemaining, setMoneyRemaining] = useState(100);

  const addPlate = sushi => {
    setPlates([...plates, sushi]);
  };

  const updateMoneyRemaining = price => {
    setMoneyRemaining(() => moneyRemaining - price);
  };

  return (
    <div className="app">
      <SushiContainer
        addPlate={addPlate}
        updateMoneyRemaining={updateMoneyRemaining}
        moneyRemaining={moneyRemaining}
      />
      <Table plates={plates} moneyRemaining={moneyRemaining} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import MoreButton from './MoreButton';
import Sushi from './Sushi';

const API = 'http://localhost:3001/sushis';

function SushiContainer({ addPlate, updateMoneyRemaining, moneyRemaining }) {
  const [sushis, setSushis] = useState([]);
  let [page, setPage] = useState(0);

  const turnPage = () => setPage(() => ++page);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setSushis(data));
  }, []);

  const sushisToDisplay = sushis.slice(1 + page * 4 - 1, 5 + page * 4 - 1);
  return (
    <div className="belt">
      {sushis &&
        sushisToDisplay.map((sushiData, i) => {
          if (i >= page + 4) return false;
          return (
            <Sushi
              key={sushiData.id}
              sushiData={sushiData}
              addPlate={addPlate}
              updateMoneyRemaining={updateMoneyRemaining}
              moneyRemaining={moneyRemaining}
            />
          );
        })}
      <MoreButton turnPage={turnPage} />
    </div>
  );
}

export default SushiContainer;

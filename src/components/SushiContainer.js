import React, { useState } from 'react';
import MoreButton from './MoreButton';
import Sushi from './Sushi';

function SushiContainer({ sushis }) {
  const [page, setPage] = useState(0);
  return (
    <div className="belt">
      {sushis &&
        sushis.map((sushiData, i) => {
          if (i >= 4) return false;
          return <Sushi key={sushiData.id} sushiData={sushiData} />;
        })}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;

import React, { useState } from 'react';

function Sushi({ sushiData, addPlate, updateMoneyRemaining, moneyRemaining }) {
  const [isEaten, setIsEaten] = useState(false);
  const { img_url, name, price, id } = sushiData;

  const eatSushi = () => {
    if (moneyRemaining - price < 0) return;
    setIsEaten(true);
    addPlate(sushiData);
    updateMoneyRemaining(price);
  };

  return (
    <div className="sushi" id={id}>
      <div className="plate" onClick={eatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img src={img_url} alt={name && 'Sushi'} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

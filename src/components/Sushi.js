import React, { useState } from 'react';

function Sushi({ sushiData }) {
  const [isEaten, setIsEaten] = useState(false);
  const { img_url, name, price, id } = sushiData;
  console.log(img_url, name, price, id);
  return (
    <div className="sushi" id={id}>
      <div className="plate" onClick={/* Give me a callback! */ null}>
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

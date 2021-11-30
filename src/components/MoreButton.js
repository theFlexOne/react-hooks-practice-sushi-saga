import React from 'react';

function MoreButton({ turnPage }) {
  return <button onClick={() => turnPage()}>More sushi!</button>;
}

export default MoreButton;

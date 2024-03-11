import React from 'react';

const SSR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: 'no-cache',
  });
  const data = await response.json();
  return <div>{data.fact}</div>;
};

export default SSR;

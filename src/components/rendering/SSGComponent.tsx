import React from 'react';

const SSG = async () => {
  const response = await fetch(`https://catfact.ninja/fact`);
  const data = await response.json();
  return <div>{data.fact}</div>;
};

export default SSG;

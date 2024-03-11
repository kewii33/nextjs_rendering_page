import React from 'react';

const ISRComponent = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 5,
    },
  });
  const data = await response.json();

  return <div>{data.fact}</div>;
};

export default ISRComponent;

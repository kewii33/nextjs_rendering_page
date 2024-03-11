'use client';

import React, { useEffect, useState } from 'react';

type CatFact = {
  fact: string;
};

const CSR = () => {
  const [catFact, setCatFact] = useState<CatFact | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const data: CatFact = await response.json();
      setCatFact(data);
    };
    fetchData();
  }, []);

  if (!catFact) {
    return <div>로딩 중...</div>;
  }
  return <div>{catFact.fact}</div>;
};

export default CSR;

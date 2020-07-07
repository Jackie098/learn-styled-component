import React from 'react';

import { Title, TitleSmall } from './styles';

function App() {
  return (
    <div >
      <Title fontSize={30} >
        Hello World!
        <span>Texto adicional</span>  
      </Title>

      <TitleSmall>Menor</TitleSmall>
    </div>
  );
}

export default App;

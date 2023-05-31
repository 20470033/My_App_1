import React from 'react';
import { createRoot } from 'react-dom/client'
import  App  from './App';

const rootHTML  = document.querySelector('#root');
const root = createRoot ( rootHTML)

root.render(
  <>
    <App/>
  </>

)
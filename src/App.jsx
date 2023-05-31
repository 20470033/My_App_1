import { useState } from 'react';
import './App.css'

const App = () => {

    const [contador, setContador ] = useState(0);
   
    
    return (
        
        <div className='container'>
        <h1>Counter App</h1>
        <h2
            className={contador > 0 ? 'positivo' : contador < 0 ? 'negativo' : ''}
        >
            {contador}
        </h2>
        <button 
        className='restar'
        onClick={ () => setContador(contador  -1)}
        >
            -
        </button>
        <button
        className='cero'
        onClick={ () => setContador(0)}
        >
            Reset
        </button>

        <button 
        className='sumar'
        onClick={ () => setContador( contador + 1)}
        >
        +
        </button>
        </div>
    )
}

export default App;
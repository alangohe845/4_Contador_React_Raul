import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Contador(){
    const [contador, setContador] = useState(10);
    const sumar = () => {
        let contador1 = contador;
        contador1++;
        setContador(contador1);
    }
    const restar = () => {
        let contador2 = contador;
        contador2--;
        setContador(contador2);
    }
    const reset = () => {
        let contador3 = contador;
        contador3 = 0;
        setContador(contador3);
    }
    return(
        <div>
            Contador : { contador }
            <p><Button variant='primary' onClick={sumar}>+</Button>
            <Button variant='danger' onClick={restar}>-</Button>
            <Button variant='success' onClick={reset}>Reset</Button></p>
        </div>
    );
}
export default Contador;
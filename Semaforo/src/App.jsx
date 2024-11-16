import './App.css'
import amarelo from './img/amarelo.png'
import verde from './img/verde.png'
import vermelho from './img/vermelho.png'
import desligado from './img/desligado.png'
import { useState } from 'react'

function App() {
  const objSinaleira = {
    vermelho,
    amarelo,
    verde,
    desligado
  };
  // console.log('Objeto sinaleira: ', objSinaleira)

  const [sinaleira, setSinaleira] = useState(objSinaleira.desligado);
  // console.log('Cor sinaleira: ', sinaleira);

  function trocaEstadoSinalera(cor) {
    // console.log('Onclick cor ', cor);
    setSinaleira(objSinaleira[cor]);
    // console.log('Onlclick obj sinaleira ', objSinaleira[cor]);
  }

  return (
    <div className='container'>
      <img src={sinaleira} />
      <button className='red' onClick={() => trocaEstadoSinalera('vermelho')}>Vermelho</button>
      <button className='yellow' onClick={() => trocaEstadoSinalera('amarelo')}>Amarelo</button>
      <button className='green' onClick={() => trocaEstadoSinalera('verde')}>Verde</button>
      <button className='off' onClick={() => trocaEstadoSinalera('desligado')}>Desligado</button>
    </div>
  );
}

export default App

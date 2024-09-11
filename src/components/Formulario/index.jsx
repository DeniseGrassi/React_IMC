import { useState } from "react";

import styles from './Formulario.module.css';


const Formulario = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState('');
    const [classificacao, setClassificacao] = useState('');

//A função parseFloat serve para converter uma string em um número de ponto flutuante, ou seja, um número decimal
const calcularIMC = () => {
    const alturaMetros = parseFloat(altura);
    const pesoKg = parseFloat(peso);

    if (alturaMetros && pesoKg) {

        const alturaQuadrada = (alturaMetros * alturaMetros);
        const IMC = pesoKg / alturaQuadrada; //peso / (altura*altura)
        setImc(IMC.toFixed(2));

        if ( IMC < 18.5 ) {
            return (
                <p> { setClassificacao("Abaixo do peso")}  </p>
            )
        } else if (IMC >= 18.5 && IMC <= 24.9) {
            return (
                <p> { setClassificacao("Peso normal")} </p>
            )
        } else if (IMC >= 25.0 && IMC <= 29.9) {
            return (
                <p>{ setClassificacao("Sobrepeso")}  </p>
            )
        } else if (IMC >= 30.0 && IMC <= 34.9) {
            return (
                <p> { setClassificacao("Obesidade Grau I")}  </p>
            )
        } else if (IMC >= 35.0 && IMC <= 39.9) {
            return (
                <p>{ setClassificacao("Obesidade Grau II")}</p>
            )
        } else {
            return (
                <p> { setClassificacao("Obesidade Grau III")} </p>
            )
        }   
    }
};

    return (
        <div> 
            
            <form className={styles.form}>
            <h2 className={styles.h3}> Calcule o seu IMC: </h2>
            <label> Altura (m): </label>
            <input className={styles.input} type="number" placeholder="Digite a sua altura" value={altura} onChange={e => setAltura(e.target.value)}/> 
            <label>Peso (Kg): </label>
            <input className={styles.input} type="number" placeholder="Dgite o seu peso" value={peso} onChange={e => setPeso(e.target.value)}/> <br/>
            {/* { calcularIMC()} */}
            <button type="button" onClick={calcularIMC}>Calcular IMC</button>

            {imc && (
                <div>
                    <h3>IMC: {imc} </h3>
                    <h3>Classificação: {classificacao}</h3>
                </div>
            )}
            </form>


        </div>
    )
}
export default Formulario;


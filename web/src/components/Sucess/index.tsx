import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import './styles.css';
const Sucess = () => {
    return(
        <div className="sucess">
            <FiCheckCircle/>
            <span>Cadastrado com sucesso</span>
        </div>
    );
}

export default Sucess;
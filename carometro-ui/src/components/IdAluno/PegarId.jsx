import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from '@react-navigation/native';

export default function GetID() {

    const navigate = useNavigate()

    function RedirecionaAluno(idAluno) {
        navigate("http://localhost:5000/api/alunos/" + idAluno)
    }

    return (

        
        <div>
             {/* Esse seria o card dos ALUNOS */}
            <button
                onClick={() => RedirecionaAluno(aluno.idAluno)}>
                 </button>

            <button
                onClick={() => RedirecionaAluno(aluno.idAluno)}>
                2º </button>

            <button
                onClick={() => RedirecionaAluno(aluno.idAluno)}>
                3º </button>

                <button class="teclado" id="qTeclado" onClick= "clickTeclado(this.value)" value={idTurma}>Q</button>

        </div>



    )
}
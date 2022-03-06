import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function DetectarRosto() {

    // function ListarIds() {
    //     axios('https://testeface.cognitiveservices.azure.com/face/v1.0/detect?detectionModel=detection_03&returnFaceId=true&returnFaceLandmarks=false', {
    //          headers: {
    //             'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
    //         }
    //     })
    //         .then(resposta => {
    //             if (resposta.status === 200) {
    //                 console.log(resposta.data)
    //                 setListaAlunos(resposta.data)
    //             };
    //         })
    //         .catch(erro => console.log(erro));
    // };

    // useEffect(GetImage, []); 


    const [url, setUrl] = useState("");

    GetURL = (submit_url) => {
        submit_url.preventDefault();
        fetch('https://testeface.cognitiveservices.azure.com/face/v1.0/detect?detectionModel=detection_03&returnFaceId=true&returnFaceLandmarks=false', {
            method: 'POST',
            body: JSON.stringify({
                // IdUsuario: this.state.idUsuario,

                URL: this.state.url,
               
            }),
            headers: {
                "Ocp-Apim-Subscription-Key" : "e75278764e294302b0ec5cfee4a27d81",
                "Content-Type": "application/json"
            }
        })
            .then(console.log("URL cadastrada"))
            .catch(erro => console.log(erro))
            .then(this.buscarURL) // Método de buscar Url para listar os outros FaceIds
            .then(this.limparCampos)
    }

}
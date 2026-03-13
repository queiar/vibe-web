const misProyectos = [
    {
        numero: "25",
        titulo: "¡Las mujeres en defensa de sus derechos!",
        descripcion: "Identificaremos la participación histórica de las mujeres y sus luchas por la igualdad y una vida libre de violencia.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        pdfLocal: "recursos/pdfs/1_P_NLP3_ENS_25_26_27.pdf",
        driveUrl: "https://drive.google.com/drive/folders/1CzWm2CUAHJOg6xSjlsvIVRrcfukh1NtA",
        pda: "Analiza testimonios y argumenta cambios históricos en el 'deber ser' de las mujeres."
    }
];

const fechaElem = document.getElementById('fecha-actual');
if(fechaElem) {
    fechaElem.innerText = new Date().toLocaleDateString('es-MX', { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    });
}

function cargarProyectos() {
    const contenedor = document.getElementById('contenedor-clases');
    if(!contenedor) return;
    contenedor.innerHTML = "";
    misProyectos.forEach(proyecto => {
        contenedor.innerHTML += `
            <div class="tarjeta">
                <small style="color: #666; font-weight: bold;">PROYECTO ${proyecto.numero}</small>
                <h2>${proyecto.titulo}</h2>
                <div class="pda-box">
                    <strong>Aprendizaje (PDA):</strong><br>
                    ${proyecto.pda}
                </div>
                <div class="video-container">
                    <iframe src="${proyecto.videoUrl}" frameborder="0" allowfullscreen></iframe>
                </div>
                <p>${proyecto.descripcion}</p>
                <div class="grupo-botones">
                    <a href="${proyecto.pdfLocal}" target="_blank" class="btn btn-pdf">📄 Ver Planeación</a>
                    <a href="${proyecto.driveUrl}" target="_blank" class="btn btn-drive">📚 Libros Drive</a>
                </div>
            </div>
        `;
    });
}
cargarProyectos();
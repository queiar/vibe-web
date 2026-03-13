const proyecto = {
    titulo: "¡Las mujeres en defensa de sus derechos!",
    pda: "Analiza testimonios y argumenta cambios históricos en el 'deber ser' de las mujeres.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pdf: "recursos/pdfs/1_P_NLP3_ENS_25_26_27.pdf",
    drive: "https://drive.google.com/drive/folders/1CzWm2CUAHJOg6xSjlsvIVRrcfukh1NtA",
    etapas: [
        "¿Qué sabemos?: Punto de partida sobre la igualdad.",
        "Lo que necesitamos saber: Indagación histórica.",
        "Organizamos las actividades: Plan de acción.",
        "Creatividad en marcha: Elaboración del Cuadro Revelador.",
        "Compartimos: Encuentro de expresiones libres."
    ]
};

function renderProyecto() {
    const main = document.getElementById('contenedor-clases');
    
    let etapasHTML = proyecto.etapas.map((e, i) => `
        <div class="paso">
            <div class="paso-numero">${i+1}</div>
            <div>${e}</div>
        </div>
    `).join('');

    main.innerHTML = `
        <div class="contenedor">
            <section class="seccion-card">
                <h2>🎯 Nuestro Objetivo (PDA)</h2>
                <p>${proyecto.pda}</p>
                <div class="video-wrap">
                    <iframe src="${proyecto.video}" frameborder="0" allowfullscreen></iframe>
                </div>
            </section>

            <section class="seccion-card">
                <h2>📅 Cronograma de Trabajo</h2>
                ${etapasHTML}
            </section>

            <section class="seccion-card" style="text-align:center;">
                <h2>📦 Recursos y Entregables</h2>
                <a href="${proyecto.pdf}" class="btn-accion" target="_blank">📄 Descargar Guía PDF</a>
                <a href="${proyecto.drive}" class="btn-accion" style="background:#f59e0b" target="_blank">📚 Biblioteca Drive</a>
            </section>
        </div>
    `;
}

renderProyecto();
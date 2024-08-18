const fs = require('fs');
const path = require('path');
const citasPath = path.join(__dirname, 'citas.json');

// Función para registrar una nueva cita
function registrar(nombre, edad, tipoAnimal, color, enfermedad) {
    const nuevaCita = { nombre, edad, tipoAnimal, color, enfermedad };
    
    // Para leer el archivo existente
    fs.readFile(citasPath, 'utf8', (err, data) => {
        if (err) throw err;
        const citas = JSON.parse(data);
        citas.push(nuevaCita);
        
        // Permite escribir el archivo actualizado
        fs.writeFile(citasPath, JSON.stringify(citas, null, 2), (err) => {
            if (err) throw err;
            console.log('Cita registrada:', nuevaCita);
        });
    });
}

// Función para leer todas las citas
function leer() {
    fs.readFile(citasPath, 'utf8', (err, data) => {
        if (err) throw err;
        const citas = JSON.parse(data);
        console.log('Citas registradas:', citas);
    });
}

module.exports = { registrar, leer };
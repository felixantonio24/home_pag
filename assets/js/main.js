// Datos de ejemplo para las opciones del país
const countries = ['United States', 'Peru', 'Argentina', 'Ecuador', 'Paraguay'];

// Obtén el elemento select por su ID
const selectElement = document.getElementById('countrySelect');

// Genera las opciones basadas en los elementos del array countries
for (let i = 0; i < countries.length; i++) {
    // Crea un nuevo elemento <option>
    const optionElement = document.createElement('option');
    // Establece el texto del <option> como el país actual del array countries
    optionElement.textContent = countries[i];
    // Agrega el <option> al <select>
    selectElement.appendChild(optionElement);
}

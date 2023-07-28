
export function convertirNombre(nombre) {
    let nuevoNombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    //nuevoNombre = nuevoNombre.replace("-", " ");
    return nuevoNombre.replaceAll("-", " ");
}
export function agregarCerosIzquierda(numero) {
    let nuevoNumero = numero.toString().padStart(5, '0');
    return nuevoNumero;
}
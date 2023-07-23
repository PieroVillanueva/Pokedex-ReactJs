
export function convertirNombre(nombre) {
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    nombre = nombre.replace("-", " ");
    return nombre;
}
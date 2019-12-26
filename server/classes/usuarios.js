class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        //agregar persona al chat
        let persona = { id, nombre, sala }

        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) {
        //buscar en el array de personas si alguien coincide con el id
        let persona = this.personas.filter(persona => persona.id === id)[0];
        //si encuentra alguien, retornar la primera posición

        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersonas(id) {

        let personaBorrada = this.getPersona(id);

        //reemplazar el array por uno nuevo elimnando la persona por id
        this.personas = this.personas.filter(persona => persona.id != id)

        return personaBorrada;
    }
}

module.exports = {
    Usuarios
};
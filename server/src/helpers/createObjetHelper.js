export const createsNewTeacher = (body) =>{

    if (!idDocente || 
        !nombres || 
        !apellidos || 
        !tipoIdentificacion || 
        !user || !password || 
        !tipoDocente || 
        !tipoContrato || 
        !area) {
        return false;
    }
    return newTeacher;
}

export default {createsNewTeacher};
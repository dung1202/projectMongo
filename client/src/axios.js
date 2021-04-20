import axios from 'axios'

let instantAxios = axios.create({
    timeout: 20000,
    baseURL: 'http://localhost:8797'
})

export const login = (body) => {
    return instantAxios.post('/login', body)
}

export const getStudent = () => {
    return instantAxios.get('/student')
}

export const getStudentById = (id) => {
    return instantAxios.get('/student/' + id)
}

export const createStudent = (body) => {
    return instantAxios.post('/student', body)
}

export const updateStudent = (body) => {
    return instantAxios.put('/student', body)
}

export const deleteStudent = (id) => {
    return instantAxios.delete('/student/' + id)
}


export const getSchool = () => {
    return instantAxios.get('/school')
}

export const createSchool = (body) => {
    return instantAxios.post('/school', body)
}

export const updateSchool = (body) => {
    return instantAxios.put('/school', body)
}

export const deleteSchool = (id) => {
    return instantAxios.delete('/school/' + id)
}

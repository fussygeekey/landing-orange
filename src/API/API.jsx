import * as axios from 'axios';

const instanse = axios.create({
    baseURL: ""
})

export const setText = (DATA) => {
    return instanse.post(`get_mail.php`, DATA)
        .then(response => {
            return response.data

        })
}
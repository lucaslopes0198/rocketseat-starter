const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

export async function umPorSegundo() {  
    await delay();
    console.log('1s')
    await delay();
    console.log('2s')
    await delay();
    console.log('3s')
}


import axios from 'axios';

export async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    } catch {
        console.log('Usuário não existe');
    }
}

export class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response)
        } catch {
            console.log('Repositório não existe');
        }
    }
}

export const buscaUsuario = async (usuario) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response)
    } catch {
        console.log('Usuário não existe');
    }
}

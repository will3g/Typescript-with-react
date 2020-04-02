import { Request, Response } from 'express'; // Sim, em ts temos o tipo request e o response
import EmailService from '../services/EmailService';

function setUsername(user:string='anônimo') {
    return user;
}

function setEmail(email:string) {
    return email;
}

const example = setUsername(); // Aqui estamos dizendo que a variável username é uma string, pois o retorno
// função setUsername() é um tipo string. Logo, o tipo dessa variável username é string também, porém,
// definimos o tipo sutilmente. AUTOMÁGICO!

let usersList = [
    {
        username: setUsername('marcianinho123'),
        email: setEmail('marcianinho123@gmail.com')
    },
    {
        username: setUsername('ocampos'),
        email: setEmail('ocampos@gmail.com')
    },
    {
        username: setUsername('will3g'),
        email: setEmail('will3g@gmail.com')
    }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(usersList);
    },
    async create(req: Request, res: Response) {
        const emailservice = new EmailService(usersList[1].username, usersList[1].email);

        const response = emailservice.sendEmail({
            // Criamos a regrinha IMessageDTO para não confundir os parametros
            to: usersList[0],
            message: {
                subject: 'Happy hour',
                body: 'Bora ir no pasteco meo?'
            }
        });

        return res.json(response);
    }
};
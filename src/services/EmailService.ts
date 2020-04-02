//import { IMailTo, ImailMessage, IMessageDTO } from '../interfaces/interfaces';
//import IMessageDTO from '../interfaces/interfaces'; // Assim estamos exportando todas as interfaces
import { IMessageDTO } from '../interfaces/interfaces'; // Assim estamos exportando somente IMessageDTO

class EmailService {

    username: string;
    email: string;

    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
    }

    sendMail({to, message}: IMessageDTO) {
        console.log(`
            Email enviado pelo usuário ${this.username}, email ${this.email} 
            para o email ${to.email}, com o assunto: ${message.subject} 
            para o usuário ${to.username}.

            ---------------------------------------
             Message: ${message.body}
            ---------------------------------------
        `);
    }
}

export default EmailService;
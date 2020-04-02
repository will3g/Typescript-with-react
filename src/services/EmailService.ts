//import { IMailTo, ImailMessage, IMessageDTO } from '../interfaces/interfaces';
//import IMessageDTO from '../interfaces/interfaces'; // Assim estamos exportando todas as interfaces
//import { IMessageDTO } from '../interfaces/interfaces'; // Assim estamos exportando somente IMessageDTO
//import IRuleEmailService, { IMessageDTO } from '../interfaces/interfaces';
import { IRuleEmailService, IMessageDTO } from '../interfaces/interfaces';

// IRuleEmailService está obrigando a classe EmailService ter o método sendEmail() criado
class EmailService implements IRuleEmailService {

    username: string;
    email: string;

    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
    }

    sendEmail({to, message}: IMessageDTO) {
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
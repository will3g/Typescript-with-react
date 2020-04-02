interface IMailTo {
    username: string,
    email: string
}

interface ImailMessage {
    subject: string,
    body: string,
    //attachment? pq não sabemos se vai ter anexo ou não na mensagem
    attachment?: Array<string> // ou string[]
}

class EmailService {

    username: string;
    email: string;

    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
    }

    sendMail(to: IMailTo, message: ImailMessage) {
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
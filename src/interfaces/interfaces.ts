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

//Estamos criando uma regrinha para transferencia de dados entre arquivos
interface IMessageDTO { // DTO => Data Transfer Object
    to: IMailTo,
    message: ImailMessage
}

// Exportando de forma desestruturada
export {
    IMailTo,
    ImailMessage,
    IMessageDTO
}

// Exportando de forma padrão (todas as interfaces)
export default IMessageDTO;
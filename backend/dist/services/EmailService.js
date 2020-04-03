"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IRuleEmailService está obrigando a classe EmailService ter o método sendEmail() criado
var EmailService = /** @class */ (function () {
    function EmailService(username, email) {
        this.username = username;
        this.email = email;
    }
    EmailService.prototype.sendEmail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("\n            Email enviado pelo usu\u00E1rio " + this.username + ", email " + this.email + " \n            para o email " + to.email + ", com o assunto: " + message.subject + " \n            para o usu\u00E1rio " + to.username + ".\n\n            ---------------------------------------\n             Message: " + message.body + "\n            ---------------------------------------\n        ");
    };
    return EmailService;
}());
exports.default = EmailService;

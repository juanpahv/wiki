import PasswordRecuperationService from "../services/PasswordRecuperationService";

interface mail{
    mail : string;
}

export default class SendPasswordRecuperationMailTask {
    private mail : mail;

    public constructor( _mail : mail){
        this.mail = _mail
    }

    public async execute(): Promise<void>{
        this.validarMail();
        this.sendMail();
    }

    private async sendMail():Promise<void>{
        const passwordRecuperationService = new PasswordRecuperationService()
        await passwordRecuperationService.SendPasswordRecuperationMail(this.mail)
    }

    private validarMail():void{
        const {mail} = this.mail
        if(!mail){
            throw new Error('ErrorFaltaMail')
        }
    }
}
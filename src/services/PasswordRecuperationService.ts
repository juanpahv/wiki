import axios, { AxiosError } from 'axios';

interface mail{
    mail : string
}

interface changePasswordData {
    mailVerificationCodeId : number;
    newPassword : string;
}

export default class PasswordRecuperationService {
    private baseUrl: string;

    public constructor() {
        this.baseUrl = 'http://localhost:3001/recoverPassword';
    }

    public async ChangePassword(
        data : changePasswordData
    ): Promise<void>{
        try{
            await axios.put(`${this.baseUrl}/changePassword`,data)
            return;
        }catch(e){
            if(e instanceof AxiosError){
                switch (e.response?.status) {
                    case 400:
                        throw new Error('ErrorFormularioIncompleto');
                    case 403:
                        throw new Error('CodigoExpirado');
                    default:
                        throw new Error('ErrorDesconocido');
                }
            }else{
                throw e
            }
        }
    }
    
    public async SendPasswordRecuperationMail(
        mail : mail
    ): Promise<void> {
        try{
            await axios.post(`${this.baseUrl}/sendRecuperationMail`, mail);
            return
        }catch (e){
            if(e instanceof AxiosError){
                switch (e.response?.status) {
                    case 400:
                        throw new Error('ErrorFaltaMail');
                    case 403:
                        throw new Error('ErrorCorreoNoRegistrado');
                    default:
                        throw new Error('ErrorDesconocido');
                }
            }else{
                throw e
            }

        }
    }

}
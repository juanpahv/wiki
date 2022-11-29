import axios, { AxiosError } from 'axios';

interface mail{
    mail : string
}

export default class PasswordRecuperationService {
    private baseUrl: string;

    public constructor() {
        this.baseUrl = 'http://localhost:3001/recoverPassword';
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
                        throw new Error('ErrorFormularioIncompleto');
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
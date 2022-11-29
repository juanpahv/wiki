import axios, {AxiosError} from "axios";

interface changePasswordData{
    mail : string;
    oldPassword : string;
    newPassword : string;
}

export default class MailVerificationService {
    private tokenSesion: string;

    private baseUrl: string;

    public constructor() {
        const tokenSesion = localStorage.getItem('tokenSesion');
        if (!tokenSesion) {
            throw new Error('ErrorSesionExpiradaOInvalida');
        }
        this.tokenSesion = tokenSesion;
        this.baseUrl = 'http://localhost:3001/changeData';
    }

    private get headers() {
        return {
            'Token-Session': this.tokenSesion
        };
    }

    public async changePassword(data : changePasswordData){
        try{
            await axios.put(
                `${this.baseUrl}/changePassword`,
                data,
                {headers : this.headers});
        }catch(e){
            if (e instanceof AxiosError && e.response?.status) {
                switch (e.response.status) {
                    case 400: // Bad Request
                        throw new Error('ErrorFormularioIncompleto');
                    case 401: // Unauthorized
                        throw new Error('ErrorSesionExpiradaOInvalida');
                    case 403: // forbiden               
                        throw new Error('ErrorPasswordDoesntMatchUser');
                    default:
                        throw e;
                }
            }

            throw e;
        }
    }

}
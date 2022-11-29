import axios, { AxiosError } from 'axios';

interface SignUpData {
    nombreUsuario: string;
    password: string;
    mail: string;
}

interface LogInData {
    nombreUsuario: string;
    password: string;
}

export default class AuthenticationService {
    private baseUrl: string;

    public constructor() {
        this.baseUrl = 'http://localhost:3001/auth';
    }

    public async signUpNewUser(
        signUpData: SignUpData
    ): Promise<string> {
        try {
            const respuesta = await axios.post(
                `${this.baseUrl}/signUp`,
                signUpData
            );
            return respuesta.data.tokenSesion as string;
        } catch (e) {
            if (e instanceof AxiosError) {
                switch (e.response?.status) {
                    case 400:
                        throw new Error('ErrorFormularioIncompleto');
                    case 409:
                        throw new Error('ErrorNombreUsuarioDuplicado');
                    default:
                        throw new Error('ErrorDesconocido');
                }
            } else {
                throw e;
            }
        }
    }

    public async LogIn(
        logInData: LogInData
    ): Promise<string> {
        try {
            const respuesta = await axios.post(
                `${this.baseUrl}/logIn`,
                logInData
            );
            return respuesta.data.tokenSesion as string;
        } catch (e) {
            if (e instanceof AxiosError) {
                switch (e.response?.status) {
                    case 400:
                        throw new Error('ErrorFormularioIncompleto');
                    case 401:
                        throw new Error('ErrorNombreUsuarioPasswordIncorrectos');
                    default:
                        throw new Error('ErrorDesconocido');
                }
            } else {
                throw e;
            }
        }
    }

}
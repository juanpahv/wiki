import AuthenticationService from '../services/AuthenticationService';

interface LogInNewUserData {
    mail: string;
    nombreUsuario: string;
    password: string;
    verifyPassword: string;
}

export default class SignUpNewUserTask {
    private logInNewUserData: LogInNewUserData;

    public constructor(
        datosFormularioRegistroUsuario: LogInNewUserData
    ) {
        this.logInNewUserData = datosFormularioRegistroUsuario;
    }

    public async execute(): Promise<void> {
        this.validarDatosFormulario();
        const tokenSesion = await this.registrarUsuario();
        localStorage.setItem('tokenSesion', tokenSesion);
    }

    private async registrarUsuario(): Promise<string> {
        const authenticationService = new AuthenticationService();

        const {
            mail,
            nombreUsuario,
            password,
            verifyPassword
        } = this.logInNewUserData;

        const tokenSesion = authenticationService.signUpNewUser({
            nombreUsuario,
            password,
            mail
        });

        return tokenSesion;
    }

    private validarDatosFormulario(): void {
        const {
            mail,
            nombreUsuario,
            password,
            verifyPassword
        } = this.logInNewUserData;

        if (
            !mail
            || !nombreUsuario
            || !password
            || !verifyPassword
        ) {
            throw new Error('ErrorFormularioIncompleto');
        }

        if (password !== verifyPassword) {
            throw new Error('ErrorPasswordsNoCoinciden');
        }
    }
}
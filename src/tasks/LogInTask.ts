import AuthenticationService from '../services/AuthenticationService';

interface LoagInData {
    nombreUsuario: string;
    password: string;
}

export default class LogInTask {
    private datosFormularioInicioSesion: LoagInData;

    public constructor(
        datosFormularioRegistroUsuario: LoagInData
    ) {
        this.datosFormularioInicioSesion =
            datosFormularioRegistroUsuario;
    }

    public async execute(): Promise<void> {
        this.validarDatosFormulario();
        const tokenSesion = await this.iniciarSesion();
        localStorage.setItem('tokenSesion', tokenSesion);
    }

    private async iniciarSesion(): Promise<string> {
        const servicioAutenticacion = new AuthenticationService();

        const {
            nombreUsuario,
            password
        } = this.datosFormularioInicioSesion;

        const tokenSesion = servicioAutenticacion.LogIn({
            nombreUsuario,
            password
        });

        return tokenSesion;
    }

    private validarDatosFormulario(): void {
        const {
            nombreUsuario,
            password
        } = this.datosFormularioInicioSesion;

        if (!nombreUsuario || !password
        ) {
            throw new Error('ErrorFormularioIncompleto');
        }
    }
}
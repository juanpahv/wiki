import PasswordRecuperationService from "../services/PasswordRecuperationService";

interface changePasswordData {
    mailVerificationCodeId : number;
    newPassword : string;
}

export default class ChangePasswordByRecuperationTask {
    private changePasswordData : changePasswordData;

    public constructor( _changePasswordData : changePasswordData){
        this.changePasswordData = _changePasswordData
    }

    public async execute(): Promise<void>{
        this.validarData();
        await this.changePassword();
    }

    private async changePassword():Promise<void>{
        const passwordRecuperationService = new PasswordRecuperationService()
        await passwordRecuperationService.ChangePassword(this.changePasswordData)
    }

    private validarData():void{
        const {mailVerificationCodeId, newPassword} = this.changePasswordData
        if(!mailVerificationCodeId || !newPassword){
            throw new Error('ErrorFormularioIncompleto')
        }
    }
}
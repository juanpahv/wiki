import ChangeDataService from "../services/ChangeDataService";

interface changePasswordData{
    mail : string;
    oldPassword : string;
    newPassword : string;
}

export default class {
    private changePasswordData : changePasswordData;

    public constructor( _changePasswordData : changePasswordData){
        this.changePasswordData = _changePasswordData
    }

    public async execute(): Promise<void>{
        this.validarData();
        await this.changePassword();
    }

    private async changePassword():Promise<void>{
        const passwordRecuperationService = new ChangeDataService()  
        await passwordRecuperationService.changePassword(this.changePasswordData)

    }

    private validarData():void{
        const {mail, oldPassword, newPassword} = this.changePasswordData
        if(!mail || !newPassword || !oldPassword){
            throw new Error('ErrorFormularioIncompleto')
        }
    }
}
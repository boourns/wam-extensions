export class UserSettingExtension {
    get?(pluginId: string, id: string): any
    set?(pluginId: string, id: string, value: any): any
}
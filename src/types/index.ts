export interface IAction {
    type: string
    payload?: any
}
export interface IState {
    id: number
    components: any
    skill: string
}
export interface ISkill {
    data: any[]
}

export interface IStateWork {
    id: number
    title: string
    img: any
    link: string
}
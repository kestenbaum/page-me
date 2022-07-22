import React from "react";

/*---- interfaceContactBlock----*/
export interface IContactBlock {
    props: any
}

{/*---- interfaceSidebar ----*/}
export interface ISidebar {
    classes: any
}

{/*---- interfaceCardWork ----*/}
export interface ICardWork {
    props: IStateWork
}

{/*---- interfaceWorks----*/}
export interface IStateWork {
    id: number
    title: string
    img: any
    link: string
}

{/*---- interfaceIcon----*/}
export interface IIcon {
    color: string
    children: any
    size: string
}

{/*---- interfaceButton----*/}
export interface IButton extends
    React.DetailedHTMLProps<React.HTMLProps<HTMLButtonElement>, HTMLButtonElement>{}

{/*---- interfaceBurgerMenu ----*/}
export interface IBurgerMenu {
    state: boolean
    setState: any
}

{/*---- interfaceImageComponent ----*/}
export interface IImageInterface extends React.ImgHTMLAttributes<any>{
    props?: any
}

{/*---- interfaceSkills----*/}
export interface ISkill {
    data: any[]
}

{/*---- interfaceSkillItem----*/}
export interface ISkillItem {
    skill: string
    component: any
}

{/*---- reducerAction ----*/}
export interface IAction {
    type: string
    payload?: any
}

{/*---- reducerWork ----*/}
export interface IWork {
    works: IStateWork[]
}


import React from "react";

export interface IContactBlock {
    props: any
}

export interface ICardWork {
    props: IStateWork
}

export interface IStateWork {
    id: number
    title: string
    img: any
    link: string
}

export interface IButton extends
    React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
    disabled?: boolean
}

export interface ISkillItem {
    skill: string
    component: any
}

export interface Icons {
    id: number,
    title: string,
    img: string
}

export interface SkillCardProps {
    title: string,
    icon: string | any
}
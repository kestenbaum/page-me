import React, {FC} from 'react';
import MyButton from "../../UI/button/MyButton";
import {IStateWork} from "../../../types";
import MyImage from "../../UI/image/MyImage";

interface ICardWork {
  props: IStateWork
}

const CardWork:FC<ICardWork> = (props) => {
    return (
        <div className='card-work'>
            <h2 className='person-title'>{props.props.title}</h2>
            <MyImage src={props.props.img} className='image-work'/>
            <a href={props.props.link} className='link'>
                <MyButton>Link to project</MyButton>
            </a>
        </div>
    );
};

export default CardWork;
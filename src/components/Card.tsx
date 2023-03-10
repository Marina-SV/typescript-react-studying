import React, {FC, useState} from 'react';
import UserList from "./UserList";

// Для стилей, которые приходят из Bootstrap
export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: (num: number) => void;
}

const Card: FC<CardProps> = (
    {
        width,
        height,
        variant,
        onClick,
        children
    }) => {

    const [state, setState] = useState(0);

    return (
        <>
            <div style={{
                width,
                height,
                border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
                background: variant === CardVariant.primary ? 'lightgrey' : '',
            }}
                 onClick={() => onClick(state)}>
                {children}
            </div>
        </>
    );
};

export default Card;
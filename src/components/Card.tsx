import React, {FC, ReactChild, ReactNode} from 'react';

interface CardProps {
    width?: string;
    height?: string;
    children?: ReactChild | ReactNode
}

const Card: FC<CardProps> = ({ width, height, children }) => {
    return (
        <div style={{width, height, border: "1px solid gray"}}>
            {children}
        </div>
    );
};

export default Card;
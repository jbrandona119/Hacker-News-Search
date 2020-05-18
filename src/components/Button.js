import React from 'react';

const InLineButton = ({ onClick, type ="button", children }) => (
    <Button type={type} className="inline-button" onClick={onClick}>
        {children}
    </Button>
);

const Button = ({ onClick, className, type="button", children }) => (
    <button type={type} className={className} onClick={onClick}>
        {children}
    </button>
);

export default Button;
export { InLineButton };
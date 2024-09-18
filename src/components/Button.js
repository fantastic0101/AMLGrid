import React from "react";
import { useNavigate } from 'react-router-dom';

const Button = ({
    label,
    bgColor,
    fontColor,
    fontSize,
    border,
    borderRadius,
    padding,
    boxShadow,
    icon,
    iconPosition,
    iconPadding,
    iconClass,
    display,
    align,
    className = '',
    targetPath
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (targetPath) {
            navigate(targetPath);
        }
    };
    return <button className={className} style={{
        color: fontColor,
        backgroundColor: bgColor,
        fontSize: fontSize,
        borderRadius: borderRadius,
        padding: padding,
        boxShadow: boxShadow,
        border: border,
        display: display,
        alignItems: align
    }}
        onClick={handleClick}
    >
        {iconPosition === "left" ? <img className={iconClass} src={icon} alt="icon" style={{ padding: iconPadding }}></img> : ""}
        {label}
        {iconPosition === "right" ? <img className={iconClass} src={icon} alt="icon" style={{ padding: iconPadding }}></img> : ""}
    </button>
};

export default Button;
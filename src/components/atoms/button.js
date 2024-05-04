function Button({content, classes, isDetail, id, onClick}) {
    return (
        <button id={isDetail ? id : ''} className={classes} onClick={onClick}><span>{content}</span></button>
    );
}

export default Button;
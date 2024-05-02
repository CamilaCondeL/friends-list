function Button({content, classes, isDetail, id}) {
    return (
        <button id={isDetail ? id : ''} className={classes}><span>{content}</span></button>
    );
}

export default Button;
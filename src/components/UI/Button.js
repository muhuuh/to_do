const Button = (props) => {
    return (
        <button className="border-2 rounded-lg px-6" onClick={props.onClick}>{props.label}</button>
    );
};

export default Button;
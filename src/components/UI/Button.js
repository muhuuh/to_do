const Button = (props) => {
    return (
        <button className="border-x-2 border-paleOrangeRed hover:border-orangeRed hover:scale-110 rounded-lg px-6" onClick={props.onClick}>{props.label}</button>
    );
};

export default Button;
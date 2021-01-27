import './GenericButton.css';

export default function GenericButton(props) {
    return <button className={`generic-button ${props.customStyle}` } onClick={props.handleClick}>{props.children}</button>
}
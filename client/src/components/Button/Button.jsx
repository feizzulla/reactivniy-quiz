export default function Button({ text, type = 'button', color = 'blue', disabled = false, show = true, onClick, onMouseDown , id }) {
  const buttonStyles = {
    backgroundColor: color,
    color: "white",
    border: "none",
    fontWeight: "600",
    padding: "5px 15px"
  };

  return <button type={type} style={buttonStyles} disabled={disabled} onClick={onClick} onMouseDown={onMouseDown} id={id}>{text}</button>;
}

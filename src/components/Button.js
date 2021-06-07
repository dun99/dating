
import "./Style.css";
function Button(props) {
  return (
    <div className="Button">
      <button
        type="button"
        className={
          props.typeBtn === "submit" ? "btn btn-submit" : "btn btn-confirm"
        }
      >
        {props.content}
      </button>
    </div>
  );
}

export default Button;

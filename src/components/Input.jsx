import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input value={props.value} onChange={(event) => props.setValue(event.target.value)} style={{backgroundColor: "burlywood"}} />
  )
}

Input.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func
}

export default Input
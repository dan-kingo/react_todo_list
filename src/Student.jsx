import PropTypes from "prop-types";
function Student(props) {
  return (
    <>
      <h3>Name : {props.name}</h3>
      <h3>Age : {props.age}</h3>
      <h3>Sex : {props.sex}</h3>
    </>
  );
}
Student.defaultProps = {
  name: "Gust",
  age: 21,
  sex: "Male",
};

export default Student;


import { useFormInfo } from "../hooks/useFormStatus";

const Form = () => {
    const firstNameProps = useFormInfo();
    const lastNameProps = useFormInfo();
  return (
    <div className="text-center py-5">
      <label>
        First name:
        <input
          value={firstNameProps.value}
          onChange={firstNameProps.onchange}
          className="border"
        />
      </label>
      <br />
      <br />
      <label>
        Last name:
        <input
          value={lastNameProps.value}
          onChange={lastNameProps.onchange}
          className="border"
        />
      </label>
      <p>
        <b>
          Good morning,{" "}
          <span className="text-green-500">
            {firstNameProps.value} {lastNameProps.value}{" "}
          </span>
          .
        </b>
      </p>
    </div>
  );
};

export default Form;

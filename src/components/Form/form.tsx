import { FormProps } from "./types/form.type.prop";

const Form = (props: FormProps) => {
  return (
    <form>
      <label></label>
      <div>
        <input type="text" />
        <span>Kg</span>
      </div>

      <label></label>
    </form>
  );
};

export { Form };

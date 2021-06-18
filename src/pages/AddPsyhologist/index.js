//React
import React, { useState } from "react";
//redux
import { useDispatch } from "react-redux";
import { addNewPsyhologist } from "../../store/asyncActions/psyhologists";
//bootstrap
import { Container, Form, Button } from "react-bootstrap";

const AddPsyhologist = () => {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({ type: "Психолог" });
  const [isOk, setIsOk] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;

    setFormValue({ ...formValue, [name]: value });
  };

  const createUser = async () => {
    const { name, email } = formValue;

    if (name && name.length > 0 && email && email.length > 0) {
      const res = await dispatch(addNewPsyhologist(formValue));

      if (res) {
        setIsOk(true);
      }
    } else alert('Заполните поля')
  };

  return (
    <Container>
      {!isOk ? (
        <div>
          <Form.Control
            name="name"
            onChange={onChange}
            className="mt-5"
            placeholder="Name"
          />
          <Form.Control
            name="email"
            onChange={onChange}
            className="mt-3"
            placeholder="Email"
          />
          <select
            name="type"
            onChange={onChange}
            className="form-select mt-3"
            aria-label="Default select example"
          >
            <option value="Психолог">Психолог</option>
            <option value="Психотерапевт">Психотерапевт</option>
            <option value="Психиатр">Психиатр</option>
          </select>
          <Button onClick={createUser} className="mt-3">
            Добавить
          </Button>
        </div>
      ) : (
        "Отправлено"
      )}
    </Container>
  );
};

export default AddPsyhologist;

import "../App.css";
import React from "react";
import { useState } from "react";

const Form = ({ active, setActive }) => {
  const [firstName, setFirstName] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");

  function validateForm() {
    if (firstName.length === 0) {
      alert("Имя не может быть пустым");
      return;
    }
    if (phoneOrEmail.length === 0) {
      alert("Почта или телефон не могут быть пустыми");
      return;
    }
    alert("С вами свяжутся в течение часа");
  }

  return (
    <div
      className={active ? "form active" : "form"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "form_content active" : "form_content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="title">Форма</div>
        <div className="subtitle">Введите данные по процедуре</div>
        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setFirstName(e.target.value)}
          />
          <div className="cut cut-short"></div>
          <label for="firstname" className="placeholder">
            Имя
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="phoneEmail"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setPhoneOrEmail(e.target.value)}
          />
          <div className="cut"></div>
          <label for="phoneEmail" className="placeholder">
            Телефон/ Email
          </label>
        </div>
        <div className="input-container ic3">
          <fieldset className="checkboxing">
            <legend>Выберите цель визита:</legend>
            <div>
              <input type="checkbox" id="consult" name="consult" />
              <label for="consult">Консультация с мастером</label>
            </div>
            <div>
              <input type="checkbox" id="tatu" name="tatu" />
              <label for="tatu">Татуировка</label>
            </div>
          </fieldset>
        </div>
        <div className="input-container ic2">
          <input id="date" className="input" type="date" placeholder=" " />
          <div className="cut"></div>
          <label for="date" className="placeholder">
            Дата записи
          </label>
        </div>
        <button
          type="submit"
          className="submit"
          onClick={() => {
            validateForm();
          }}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Form;

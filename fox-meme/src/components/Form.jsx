import React from "react";

const Form = (props) => {
  const [value, setValue] = React.useState(""); // 입력 값
  const [errorMessage, setErrorMessage] = React.useState("");
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

  function handleInputChange(e) {
    setErrorMessage("");
    if (includesHangul(e.target.value)) {
      setErrorMessage("⛔한글은 입력할 수 없어요❗❗");
    }
    setValue(e.target.value.toUpperCase());
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setErrorMessage("");

    if (value === "") {
      setErrorMessage("😤글귀를 입력해 주세요💢");
      return;
    }

    setValue("");
    props.updateMainCat(value);
  }
  
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="영어 대사를 입력해주세요"
          value={value}
          onChange={handleInputChange}
        />
        <button type="submit">생성</button>
        <p style={{ color: "red" }}>{errorMessage}</p>
      </form>
    </div>
  );
};

export default Form;

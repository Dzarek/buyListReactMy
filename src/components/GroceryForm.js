import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { useGlobalContext } from "../context";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

const GroceryForm = () => {
  const { handleChange, productName, setProductName, addItem, edit } =
    useGlobalContext();
  const [checkVoice, setCheckVoice] = useState(true);

  // VOICE
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");
    if (e.results[0].isFinal) {
      console.log(transcript);
      setProductName(transcript);
      addItem(e);
    }
  });

  // let checkVoice2 = true;
  const submitBtn2Handle = () => {
    const submitBtn2 = document.querySelector(".submit-btn2");
    const alert = document.querySelector(".alert");
    if (checkVoice) {
      submitBtn2.classList.add("submit-btn3");
      recognition.addEventListener("end", recognition.start);
      recognition.start();
      alert.textContent = "powiedz nazwę produktu";
      alert.classList.add(`alert-info`);
      setCheckVoice(false);
      // checkVoice2 = false;
    } else {
      alert.textContent = "nagrywanie zakończone";
      alert.classList.add(`alert-info`);
      setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-info`);
      }, 3000);
      submitBtn2.classList.remove("submit-btn3");
      recognition.removeEventListener("end", recognition.start);
      recognition.stop();
      recognition.abort();
      setCheckVoice(true);
      // checkVoice2 = true;
    }
  };

  // END VOICE

  return (
    <form className="grocery-form" onSubmit={addItem}>
      <p className="alert"></p>
      <h3>Lista Zakupów</h3>
      <div className="form-control">
        <section className="btnSubmit-container">
          <input
            type="text"
            id="grocery"
            placeholder="wpisz nazwę produktu"
            value={productName}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="submit-btn">
            {!edit ? "dodaj" : "zmień"}
          </button>
        </section>
        <button
          type="button"
          className="submit-btn2"
          onClick={submitBtn2Handle}
        >
          <FaMicrophone />
        </button>
      </div>
    </form>
  );
};

export default GroceryForm;

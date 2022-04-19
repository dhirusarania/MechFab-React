import { useState } from "react";

const Model = props => {
  const [btn, setBtn] = useState("Send");
  const [name, setName] = useState("");
  const [email, seteMail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const sendQuote = () => {
    if (name && email && subject && validateEmail(email) && message) {
      setBtn("Sending Message");
      var formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);

      fetch("http://localhost:5000/user/quote", {
        method: "POST",
        "content-type": "multipart/form-data",
        body: formData
      }).then(() => {
        setBtn("Message Sent Successfully");
      });
    }
  };

  return (
    <div className="homepage__model center">
      <div className="homepage__model-container d-flex flex-column">
        <div className="homepage__model-close" />
        <input
          onChange={({ target }) => setName(target.value)}
          placeholder="Your Name"
        />
        <input
          onChange={({ target }) => seteMail(target.value)}
          placeholder="Your Email"
        />
        <input
          onChange={({ target }) => setSubject(target.value)}
          placeholder="Subject"
        />
        <textarea
          onChange={({ target }) => setMessage(target.value)}
          placeholder="message"
        />
        <button
          disabled={
            btn === "Sending Message" || btn === "Message Sent Successfully"
          }
          onClick={sendQuote}
          className="homepage__model-btn"
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default Model;

import './App.css';
import {useState} from "react";


function App() {
  const [modal, setModal] = useState("none");

  const handleClick = () => {
    setModal("block");
  };

  const handleModalClick = (e) => {
    if (e.target.className === "modal") setModal("none");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { phone, dob, username, email } = e.target.elements;
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (phone.value.length !== 10)
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    else if (new Date(dob.value) > new Date())
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    else if(regex.test(email)){
    alert("Invalid email. Please check your email address.");
    }
    else {
      setModal("none");
      e.target.elements.phone.value = "";
      e.target.elements.dob.value = "";
      e.target.elements.username.value = "";
      e.target.elements.email.value = "";
    }
  };

  return (
    <>
      <div className="control">
        <h1>User Details Modal</h1>
        <button className="button" onClick={handleClick}>
          Open Form
        </button>
      </div>
      <div
        className="modal"
        style={{ display: `${modal}` }}
        onClick={handleModalClick}
      >
        <div className="modal-content">
          <form onSubmit={handleSubmit} className="form">
            <h2>Fill Details</h2>
            <label for="username" className="formlabel">
              <strong>Username:</strong>
            </label>
            <input
              id="username"
              type="text"
              required
              name="username"
              className="formele"
            />

            <label for="email" className="formlabel">
              <strong>Email Address:</strong>
            </label>
            <input
              id="email"
              type="email"
              required
              name="email"
              className="formele"
            />

            <label for="phone" className="formlabel">
              <strong>Phone Number:</strong>
            </label>
            <input
              id="phone"
              type="number"
              required
              name="phone"
              className="formele"
            />

            <label for="dob" className="formlabel">
              <strong>Date of Birth:</strong>
            </label>
            <input
              id="dob"
              type="date"
              required
              name="dob"
              className="formele"
            />

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useRef } from "react";

const Forms = () => {

const emailRef = useRef();
const passRef = useRef();
const addressRef = useRef();
const cityRef = useRef();
const planRef = useRef();
const zipRef = useRef();

const handleFormSubmit = async(event) => {
    event.preventDefault();

    // Accessing values using refs
    const pass = passRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const city = cityRef.current.value;
    const plan = planRef.current.value;
    const zip = zipRef.current.value;

    const formData = new FormData();
    formData.append('Email', email);
    formData.append('Password', pass);
    formData.append('Address', address);
    formData.append('City', city);
    formData.append('Plan', plan);
    formData.append('Zip', zip);

    var keyValuePairs = [];
        for (var pair of formData.entries()) {
          keyValuePairs.push(pair[0] + "=" + pair[1]);
    }

    // console.log(keyValuePairs);
    var formDataString = keyValuePairs.join("&");

    fetch(
        "https://script.google.com/macros/s/AKfycbzkLLWg-e2mzS69IAgSI7qThA75_kJaFiKj5t5OeHISA2yxsuLtch8oo5vn3Ep1pqs_/exec",
        {
          redirect: "follow",
          method: "POST",
          body: formDataString,
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      )
        .then(function (response) {
          // Check if the request was successful
          if (response) {
            return response; // Assuming your script returns JSON response
          } else {
            throw new Error("Failed to submit the form.");
          }
        })

    passRef.current.value = '';
          emailRef.current.value = '';
          addressRef.current.value = '';
          cityRef.current.value = '';
          planRef.current.value = 'Demo';
          zipRef.current.value = '';
  };

  return (
    <div className="container">
      <form className="row g-3" onSubmit={handleFormSubmit} method="POST">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" ref={emailRef} name="Email" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" ref={passRef} name="Password" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            ref={addressRef}
            name="Address"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" ref={cityRef} name="City"/>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            Plan
          </label>
          <select id="inputState" className="form-select" ref={planRef} name="Plan">
            <option>Demo</option>
            <option>Standard</option>
            <option>Premium</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" ref={zipRef} name="Zip"/>
        </div>

        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;

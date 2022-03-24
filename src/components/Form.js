import { useEffect, useState } from "react";

const Form = () => {

  const [feedback, setFeedback] = useState(
    {
      name: "",
      email: "",
      phone: "",
      hostXp: "",
      beverageXp: "",
      cleanXp: "",
      diningXp: ""
    });
  
  const [feedbacks, setFeedbacks] = useState([])

  //Get Feedbacks collection from local storage, if it exists
  useEffect(() => {
    const localFeedbacks = localStorage.getItem("feedbacks")
    if (localFeedbacks) {
      setFeedbacks(JSON.parse(localFeedbacks))
    }
  },[])

  //On submit, update collection with the new feedback
  const handleSubmit = (e) => {
    e.preventDefault()
    setFeedbacks([...feedbacks, feedback])
  }

  
  //Update feedback fields on change
  function handleChange(e) {
    setFeedback({ ...feedback, [e.target.name]: e.target.value })
  }

  //On change of collection(i.e. on submit), save collection to local storage
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks))
  },[feedbacks])

  return (
    <div className="form-container">
      <form className="form-wrapper" autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-column form-left">
          <div className="form-intro">
            <h2>Aromatic Bar</h2>
            <p>
              We are committed to providing you with the best dining experience
              possible, so we welcome your comments. Please fill out this
              questionnaire. Thank you.
            </p>
          </div>
          <div className="fields">
            <div className="field">
              <input
                type="text"
                name="name"
                id="name"
                value={feedback.name}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                required
              />
              <label htmlFor="name" className="label-name">
                <span className="label-text">
                  Name
                  <span className="error-indicator active-error-indicator">
                    *
                  </span>
                </span>
              </label>
            </div>

            <div className="field">
              <input
                type="email"
                name="email"
                id="email"
                value={feedback.email}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                required
              />
              <label htmlFor="email" className="label-name">
                <span className="label-text">
                  Email <span className="error-indicator">*</span>
                </span>
              </label>
            </div>

            <div className="field">
              <input
                type="tel"
                name="phone"
                id="phone"
                value={feedback.phone}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                required
              />
              <label htmlFor="phone" className="label-name">
                <span className="label-text">
                  Phone <span className="error-indicator">*</span>
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="form-column form-right">
          <div className="radio-field">
            <h4>
              1.Please rate the quality of the service you received from your
              host.
            </h4>
            <div className="buttons">
              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="hostXp" value="Excellent" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Excellent</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="hostXp" value="Good" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Good</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="hostXp" value="Fair" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Fair</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="hostXp" value="Bad" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Bad</span>
              </div>
            </div>
          </div>

          <div className="radio-field">
            <h4>2.Please rate the quality of your beverage.</h4>
            <div className="buttons">
              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="beverageXp" value="Excellent" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Excellent</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="beverageXp" value="Good" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Good</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="beverageXp" value="Fair" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Fair</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="beverageXp" value="Bad" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Bad</span>
              </div>
            </div>
          </div>

          <div className="radio-field">
            <h4>3. Was our restaurant clean?</h4>
            <div className="buttons">
              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="cleanXp" value="Excellent" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Excellent</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="cleanXp" value="Good" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Good</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="cleanXp" value="Fair" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Fair</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="cleanXp" value="Bad" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Bad</span>
              </div>
            </div>
          </div>

          <div className="radio-field">
            <h4>4. Please rate your overall dining experience</h4>
            <div className="buttons">
              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="diningXp" value="Excellent" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Excellent</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="diningXp" value="Good" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Good</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="diningXp" value="Fair" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Fair</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="diningXp" value="Bad" onChange={(e) => handleChange(e)}/>
                  <span className="radio-mark"></span>
                </label>
                <span>Bad</span>
              </div>
            </div>
          </div>
          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

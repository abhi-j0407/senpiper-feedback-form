const Form = () => {
  return (
    <div className="form-container">
      <form className="form-wrapper">
        <div className="form-column">
          <div className="form-intro">
            <h2>Aromatic Bar</h2>
            <p>
              We are committed to providing you with the best dining experience
              possible, so we welcome your comments. Please fill out this
              questionnaire. Thank you.
            </p>
          </div>
          <div className="field">
            <input
              type="text"
              name="name"
              id="name"
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

        <div className="form-column">
          <div className="radio-field">
            <h4>
              1.Please rate the quality of the service you received from your
              host.
            </h4>
            <div className="buttons">
              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="host-xp" />
                  <span className="radio-mark"></span>
                </label>
                <span>Excellent</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="host-xp" />
                  <span className="radio-mark"></span>
                </label>
                <span>Good</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="host-xp" />
                  <span className="radio-mark"></span>
                </label>
                <span>Fair</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="host-xp" />
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
                  <input type="radio" name="beverage-xp" />
                  <span className="radio-mark"></span>
                </label>
                <span>Excellent</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="beverage-xp" />
                  <span className="radio-mark"></span>
                </label>
                <span>Good</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="beverage-xp" />
                  <span className="radio-mark"></span>
                </label>
                <span>Fair</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="beverage-xp" />
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
                  <input type="radio" name="clean-xp" />
                  <span className="radio-mark"></span>
                </label>
                <span>Excellent</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="clean-xp" />
                  <span className="radio-mark"></span>
                </label>
                <span>Good</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="clean-xp" />
                  <span className="radio-mark"></span>
                </label>
                <span>Fair</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="clean-xp" />
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
                  <input type="radio" name="dining-xp" />
                  <span className="radio-mark"></span>
                </label>
                <span>Excellent</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="dining-xp" />
                  <span className="radio-mark"></span>
                </label>
                <span>Good</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="dining-xp" />
                  <span className="radio-mark"></span>
                </label>
                <span>Fair</span>
              </div>

              <div className="button">
                <label className="form-radio">
                  <input type="radio" name="dining-xp" />
                  <span className="radio-mark"></span>
                </label>
                <span>Bad</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

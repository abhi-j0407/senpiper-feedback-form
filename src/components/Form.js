const Form = () => {
  return (
      <div className="form-wrapper">
          <form>
              <div className="field">
                  <input type="text" name="name" id="name" autoComplete="off" required />
                  <label htmlFor="name" className="label-name">
                      <span className="label-text">Name</span>
                  </label>
              </div>
          </form>
    </div>
  )
}

export default Form
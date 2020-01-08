import React from "react"
import { navigate } from "gatsby-link"
import { Spring } from "react-spring/renderprops"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <div className="contact-form">
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1500, duration: 1000 }}
        >
          {props => (
            <form
              style={props}
              name="contact"
              method="post"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div className="field">
                {/* <label className="label" htmlFor={"name"}></label> */}
                <div className="control">
                  <input
                    className="input"
                    type={"text"}
                    name={"name"}
                    onChange={this.handleChange}
                    id={"name"}
                    placeholder="Your name"
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                {/* <label className="label" htmlFor={"email"}></label> */}
                <div className="control">
                  <input
                    className="input"
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    id={"email"}
                    placeholder="Email"
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                {/* <label className="label" htmlFor={"message"}></label> */}
                <div className="control">
                  <textarea
                    className="textarea"
                    name={"message"}
                    rows="7"
                    onChange={this.handleChange}
                    id={"message"}
                    placeholder="Message"
                    required={true}
                  />
                </div>
              </div>
              <div className="field btns">
                <input
                  type="submit"
                  value="Send"
                  className="btn btn--primary"
                />
                <input
                  type="reset"
                  value="Clear"
                  className="btn btn--danger"
                ></input>
              </div>
            </form>
          )}
        </Spring>
      </div>
    )
  }
}

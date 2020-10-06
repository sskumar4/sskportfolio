import React from 'react';
import Wrapper from "../components/Wrapper";
import ReactDOM from 'react-dom';

class Contact extends React.Component {
 
  constructor(props) {
  // const encode = (data) => {
  //   return Object.keys(data)
  //       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //       .join("&");
  // }

    super(props);
         this.state = { name: "", email: "", message: "" };
     }
  myChangeHandler = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({[name]: val});
  }

  mySubmitHandler(e) {
    e.preventDefault();

  }

  render() {
    return (
      <Wrapper>
      <form onSubmit={this.mySubmitHandler} name="contact" method="POST" data-netlify="true" >
      <h1>Contact</h1>
      <p>Enter your name:<br />
      <input
        type='text'
        name='name'
        onChange={this.myChangeHandler}
      />
      </p>
      <p>Enter your email:<br />
      <input
        type='text'
        name='email'
        onChange={this.myChangeHandler}
      />
      </p>
      <p>Enter your Comments:<br />
      <textarea
        type='text'
        name='message'
        rows="4" cols="50"
        onChange={this.myChangeHandler}
      />
      </p>
      <p>
         <input className="bg-primary"
        type='submit'
         />
      </p>
      </form>
      </Wrapper>

    );
  }
}

ReactDOM.render(<Contact />, document.getElementById('root'));

export default Contact;
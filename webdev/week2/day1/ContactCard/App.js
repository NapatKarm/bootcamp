import React, {Component, PropTypes} from 'react';
import logo from './logo.svg';
import './App.css';


class HelloWorld extends Component{
  render() {
    return <h1> Hello World!!! </h1>
  }
}
function ContactCard(props) {
  return (
    <div className="ContactCard">
      <table>
        <tr>
          <th>Name:</th>
          <td>{props.name}</td>
        </tr>
        <tr>
          <th rowspan="2">Telephone:</th>
          <td>{props.mobilenumber} </td>
        </tr>
        <tr>
          <td>{props.worknumber} (work)</td>
        </tr>
        <tr>
          <th>Email:</th>
          <td>{props.email}</td>
        </tr>
      </table>
     </div>
   )
}
/* This causes an error
ContactCard.propTypes ={
  name: PropTypes.string.isRequired,
  mobilenumber: PropTypes.string.isRequired,
  worknumber: PropTypes.string,
  email: PropTypes.string.isRequired
}
*/
class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <ContactCard name="Napat Karmniyanont" mobilenumber="912-345-6886" worknumber="None" email="napat.karm@gmail.com"/>
        <ContactCard name="Spongebob Squarepants" mobilenumber="917-888-8282" worknumber="818-KST-KRAB" email="spnge@bob.com"/>
        <ContactCard name="Billy Bob" mobilenumber="914-123-1414" worknumber="None" email="BigBoyBill@gmail.com"/>
        </header>
      </div>
    );
  }
}


export default App;

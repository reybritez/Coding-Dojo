import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import PersonCard from './components/PersonCard';
import MyNewComponent from './components/MyNewComponent';
import LightSwitch from './components/LightSwitch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
    <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
    <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"} />
    <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"} />
    {/* <MyNewComponent header={ "Header Prop" }>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
        <button onClick={ () => alert("This button has been clicked")}> Click Me! </button>
    </MyNewComponent>

    <LightSwitch />   */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

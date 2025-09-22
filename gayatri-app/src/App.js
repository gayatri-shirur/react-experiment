import react from "react";
import card from "./card";
import contact from "../contact";

function createcard(contact){
  return(
  <card 
    key={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
  />
);
}

function App() {
  return (
    <div>
      <h1 classname="heading">my contact</h1>
      {
        contact.map(createcard)
      }
     
    </div>
  );
}

export default App;

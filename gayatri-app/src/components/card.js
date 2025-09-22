import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

 function card(props) {
  return (
    <div classname="card">
        <div classname="top">
          <p>{props.id}</p>
          <h2 classname="name">{props.name}</h2>
          <Avatar img={props.img}/>
          
            </div>
            <div classname="bottom">
              <Detail detailinfo={props.tel}/>
               <Detail detailinfo={props.email}/>
            </div>
    </div>
  );
}

export default card;
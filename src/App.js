import React from "react";
import "./styles.css";

export default function App() {
  return(
    <div>
      < HelloWorldArticle/>
    </div>

  );
}

function HelloWorldArticle() {
  return  <div>
 
  <article>
    <h1>Welcome!</h1>
    <p>currently learning react</p>

  </article>
  </div>
}
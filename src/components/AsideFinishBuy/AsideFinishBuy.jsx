import React from "react";

export default function AsideFinishBuy(props) {
  return (
    <section className={`AsideFinishBuy ${props.class}`}>
      <h1>{props.title}</h1>
      <ul>{props.children}</ul>
    </section>
  );
}

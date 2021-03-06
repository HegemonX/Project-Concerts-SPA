import "./TitleBlock.scss";
import React from "react";

function TitleBlock() {
  return (
    <header className="title-block">
      <h2 className="title title-block__title">Концерты в Москве</h2>
      <p className="title-block__secondary">
        Успейте купить билеты на самые зрелищные мероприятия
      </p>
      <span className="author">
        <a href="https://github.com/HegemonX" className="link">
          Maxim Odorodko
        </a>
      </span>
    </header>
  );
}

export default TitleBlock;

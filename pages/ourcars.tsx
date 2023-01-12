import React from "react";
import CardList from "../src/components/CardList";

type Props = {};

function ourscars({}: Props) {
  return (
    <div className="bg-blueColor flex flex-col h-screen">
      <CardList />
    </div>
  );
}

export default ourscars;

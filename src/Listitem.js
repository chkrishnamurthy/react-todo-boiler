import React from "react";
import "./Listitem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

const Listitem = (props) => {
  const items = props.items;

  const listItems = items.map((item) => (
    <div className="list" key={item.key}>
      <p>
        <input
          type="text"
          value={item.text}
          id={item.key}
          onChange={(e) => {
            props.editItem(e.target.value, item.key);
          }}
        />

        <span>
          <FontAwesomeIcon
            className="faicons"
            icon="trash"
            onClick={() => props.deleteItem(item.key)}
          />
        </span>
      </p>
    </div>
  ));
  const customEnterAnimation = {
    from: { transform: "scale(0.5, 1)" },
    to: { transform: "scale(1, 1)" },
  };

  return (
    <div>
      <FlipMove enterAnimation={customEnterAnimation}>{listItems}</FlipMove>
    </div>
  );
};

export default Listitem;

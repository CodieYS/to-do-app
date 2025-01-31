import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const Createarea = (props) => {
  const [isExpand, setIsExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function handleSubmite(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setIsExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpand ? (
          <input
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="Title"
            value={note.title}
            
          />
        ) : null}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          placeholder="What do you want to remember?"
          value={note.content}
          rows={isExpand ? 2 : 1}
        />

        <button onClick={handleSubmite}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
};

export default Createarea;

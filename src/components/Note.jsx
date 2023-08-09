import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <div onClick={() => props.handleContent(props.id)} className="note">
      <h1>{props.title}</h1>
      {props.isShowNoteContent && <p>{props.content}</p>}
      <button onClick={() => props.handleDelete(props.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;

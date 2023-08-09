import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
function CreateArea(props) {
  return (
    <div>
      <form onKeyDown={props.handleKeyDown} onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          name="title"
          placeholder={props.isShowNote ? "Title" : "Take a note ..."}
          value={props.title}
        />
        {props.isShowNote && (
          <textarea
            onChange={props.handleChange}
            name="content"
            placeholder="Take a note..."
            rows="3"
            value={props.content}
          />
        )}
        {props.isShowNote && (
          <Fab className="button" type="submit">
            <AddIcon />
          </Fab>
        )}
      </form>
    </div>
  );
}

export default CreateArea;

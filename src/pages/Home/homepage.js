import React from "react";

function Homepage({ notes }) {
  return (
    <div className="wrapper">
      <div className="profile wid-50 arrange-left">
        <img className="profile-img" src={`${process.env.PUBLIC_URL}/amresh.png`} alt="profile-pic" />
      </div>
      <div className="wid-50 profile-intro arrange-left no-select">
        {notes.map((note) => (
          <h1 key={note.key}>
            {note.content}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Homepage;

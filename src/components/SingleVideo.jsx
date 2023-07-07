import React from "react";

export default function SingleVideo({
  id,
  title,
  description = "neki desc",
  deleteCallback,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => deleteCallback(id)}>Delete</button>
    </div>
  );
}

// my-app

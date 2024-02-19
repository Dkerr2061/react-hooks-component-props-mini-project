import React from "react";

function Article({ title, date , preview}) {
 const assignedDate = date || "January 1, 1970";
  return (
    <article>
        <h3>{title}</h3>
        <small>{assignedDate}</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article;
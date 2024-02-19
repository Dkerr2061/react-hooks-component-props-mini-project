import React from "react";

function About({ image, about}) {
  const assignedImage = image || "https://via.placeholder.com/215"
  return (
    <aside>
      <img src={assignedImage} alt="blog logo"/>
      <p>{about}</p>
    </aside>
  )
}

export default About;
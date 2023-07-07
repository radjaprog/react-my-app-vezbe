import React from "react";

// prvi nacin za prosledjivanje propova i citanje tih propertija.
// export default function SingleVideo(props) {
//     return (
//     <div>
//         <h4>{props.title}</h4>
//         <p>{props.description}</p>
//     </div>
//     );
// }

export default function SingleVideo({
  id,
  title = "neki title",
  description = "neki descr",
  deleteCallback,
}) {
  // : React.Element{
  //     id: String,
  //     title: String,
  //     deleteCallback: (param1: string) => void
  // })
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>

      <button onClick={() => deleteCallback(id)}>Delete</button>
    </div>
  );
}

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SingleVideo from "../components/SingleVideo";

export default function Videos() {
  const history = useHistory();
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Video1",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "Video2",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      title: "Video3",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]);

  // ********
  const handleDelete = (videoId) => {
    // if (videoIndex !== -1) {
    //     let newVideos = [...videos];

    // }
    history.push(`videos/${videoId}`);
  };
  // ********
  return (
    <div>
      <h1>Videos</h1>
      {videos.map((video) => (
        <SingleVideo
          key={video.id}
          id={video.id}
          title={video.title}
          description={video.description}
          deleteCallback={handleDelete}
        />
        // title: video.title,
      ))}
    </div>
  );
}

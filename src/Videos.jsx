import React, { useState } from "react";
import SingleVideo from "./SingleVideo";

export default function Videos() {
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
    const videoIndex = videos.findIndex((item) => item.id === videoId);

    if (videoIndex !== -1) {
      let newVideos = [...videos];
      newVideos.splice(videoIndex, 1);
      setVideos(newVideos);
    }
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
      ))}
    </div>
  );
}

import React from "react";
import { useParams } from "react-router-dom";

export default function SingleVideoPage() {
  const { id } = useParams();
  console.log(id);
  return <h1>Single video</h1>;
}

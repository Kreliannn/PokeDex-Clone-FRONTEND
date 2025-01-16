"use client"
import Image from "next/image";
import Webcam from "react-webcam"

export default function Home() {
  return (
    <div className="w-80 h-80 border shadow">
      <Webcam />
    </div>
  );
}

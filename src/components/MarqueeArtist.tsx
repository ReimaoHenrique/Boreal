import React from "react";
import Image from "next/image";
interface MarqueeArtistProps {
  artist: string;
  genre: string;
  description: string;
  image?: string;
}

const MarqueeArtist: React.FC<MarqueeArtistProps> = ({
  artist,
  genre,
  description,
  image,
}) => {
  return (
    <div className="flex items-center  bg-gradient-to-r from-purple-800/60 to-cyan-800/60 rounded-xl px-4 py-4 shadow-lg min-w-[320px]">
      {image && (
        <Image
          src={image}
          alt={artist}
          width={80}
          height={80}
          className="w-20 h-20 object-cover rounded-full border-2 border-cyan-400  mr-2"
        />
      )}
      <div>
        <h3 className="text-2xl font-bold text-white mb-1">{artist}</h3>
        <p className="text-md text-cyan-300 font-semibold ">Genre: {genre}</p>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default MarqueeArtist;

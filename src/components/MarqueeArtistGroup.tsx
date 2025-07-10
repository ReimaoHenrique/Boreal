import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeArtist from "@/components/MarqueeArtist";

interface Artist {
  artist: string;
  genre: string;
  description: string;
  image?: string;
}

interface MarqueeArtistGroupProps {
  artists: Artist[];
  direction?: "left" | "right";
}

const MarqueeArtistGroup: React.FC<MarqueeArtistGroupProps> = ({
  artists,
  direction = "left",
}) => {
  // Dividir os artistas em duas listas para mobile
  const halfIndex = Math.ceil(artists.length / 2);
  const firstHalf = artists.slice(0, halfIndex);
  const secondHalf = artists.slice(halfIndex);

  return (
    <div>
      {/* Desktop: uma linha */}
      <div className="hidden md:block">
        <Marquee direction={direction} speed={40} gradient={false} pauseOnHover>
          <div className="flex items-center gap-8">
            {artists.map((a, idx) => (
              <div
                key={a.artist + idx}
                className={
                  (idx === 0 ? "ml-8" : "") +
                  (idx === artists.length - 1 ? " mr-8" : "")
                }
              >
                <MarqueeArtist
                  artist={a.artist}
                  genre={a.genre}
                  description={a.description}
                  image={a.image}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Mobile: duas linhas com direções alternadas */}
      <div className="md:hidden space-y-2">
        {/* Primeira linha - direita para esquerda */}
        <Marquee direction="left" speed={40} gradient={false} pauseOnHover>
          <div className="flex items-center gap-8">
            {firstHalf.map((a, idx) => (
              <div
                key={a.artist + idx}
                className={
                  (idx === 0 ? "ml-8" : "") +
                  (idx === firstHalf.length - 1 ? " mr-8" : "")
                }
              >
                <MarqueeArtist
                  artist={a.artist}
                  genre={a.genre}
                  description={a.description}
                  image={a.image}
                />
              </div>
            ))}
          </div>
        </Marquee>

        {/* Segunda linha - esquerda para direita */}
        <Marquee direction="right" speed={40} gradient={false} pauseOnHover>
          <div className="flex items-center gap-8">
            {secondHalf.map((a, idx) => (
              <div
                key={a.artist + idx}
                className={
                  (idx === 0 ? "ml-8" : "") +
                  (idx === secondHalf.length - 1 ? " mr-8" : "")
                }
              >
                <MarqueeArtist
                  artist={a.artist}
                  genre={a.genre}
                  description={a.description}
                  image={a.image}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeArtistGroup;

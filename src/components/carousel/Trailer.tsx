import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type TrailerProps = {
  trailerKey: string | null;
  setTrailerkey: Dispatch<SetStateAction<string | null>>;
};

export const Trailer = ({ trailerKey, setTrailerkey }: TrailerProps) => {
  return (
    <div>
      {trailerKey && (
        <div className="fixed inset-0 bg-opacity-75 bg-black md:bg-transparent flex items-center justify-center z-70">
          <div className="relative w-full md:max-w-4xl">
            <iframe
              title="Trailer"
              className="w-full h-60 md:h-[411px]"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; pivtire-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-2 right-2 text-white rounded-full p-2"
              onClick={() => setTrailerkey(null)}
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

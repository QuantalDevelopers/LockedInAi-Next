import { FaPlay } from "react-icons/fa6";
import ReactPlayer from "react-player";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function VideoModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center justify-center">
          <FaPlay className="h-6 w-6 transform text-white transition-transform hover:scale-110 hover:text-cyan-300 md:h-10 md:w-10" />
        </div>
      </DialogTrigger>
      <DialogContent className="h-[50vh] w-[90vw] max-w-none border-none md:h-[90vh] md:w-[90vw]">
        <DialogTitle className="sr-only">Video Modal</DialogTitle>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=32kTin9rYWg"
          width="90%"
          height="100%"
          style={{
            margin: "auto",
          }}
          controls
        />
      </DialogContent>
    </Dialog>
  );
}

import Player from "@vimeo/player";
import _ from "lodash";

const iframeRef = document.querySelector("iframe");
const player = new Player(iframeRef);

player.setCurrentTime(
  localStorage.getItem("videoplayer-current-time")
    ? localStorage.getItem("videoplayer-current-time")
    : 0
);

player.on("timeupdate", _.throttle(onTimeChange, 1000));

function onTimeChange(data) {
  localStorage.setItem("videoplayer-current-time", data.seconds);
}

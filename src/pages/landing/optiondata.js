import { TiChartBar } from "react-icons/ti";
import { BsFillPersonFill } from "react-icons/bs";
import { RiPlayListFill } from "react-icons/ri";
import { FaYoutube, FaPodcast } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { BiLineChart } from "react-icons/bi";
import { ImMusic } from "react-icons/im";

export const optiondata = [
  {
    id: 0,
    icon: <TiChartBar className="lanicon1" />,
    link: "/charts",
    text: "Chart",
  },
  {
    id: 1,
    icon: <BsFillPersonFill className="lanicon2" />,
    link: "/lecturers",
    text: "Lecturers",
  },
  {
    id: 2,
    icon: <RiPlayListFill className="lanicon3" />,
    link: "/playlists",
    text: "Playlist",
  },
  {
    id: 3,
    icon: <FaYoutube className="lanicon4" />,
    link: "/videos",
    text: "Video",
  },
  {
    id: 4,
    icon: <SiApplemusic className="lanicon5" />,
    link: "/genres",
    text: "Genres",
  },
  {
    id: 5,
    icon: <BiLineChart className="lanicon6" />,
    link: "/trending",
    text: "Trending",
  },
  {
    id: 6,
    icon: <ImMusic className="lanicon7" />,
    link: "/new",
    text: "New",
  },
  {
    id: 7,
    icon: <FaPodcast className="lanicon8" />,
    link: "/recommend2",
    text: "Podcast",
  },
];

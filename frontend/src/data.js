/*Morris Delta Realty Images*/
import CapstoneLandingPage from "../src/Images/Projects/MorrisDeltaRealty/LandingPage.png";
import CapstonePropertiesPageCarousel from "../src/Images/Projects/MorrisDeltaRealty/PropertiesPageCarousel.png";
import CapstonePropertiesPageCard from "../src/Images/Projects/MorrisDeltaRealty/PropertiesPageCard.png";
import CapstoneMapsAndNeighorsPage from "../src/Images/Projects/MorrisDeltaRealty/MapsAndNeighborsPage.png";
import CapstoneContactUsModal from "../src/Images/Projects/MorrisDeltaRealty/ContactUSModal.png";
import CapstoneContactUsValidation from "../src/Images/Projects/MorrisDeltaRealty/ContactUSValidation.png";

/*Youtube Clone Images*/
import ytcLandingPage from "../src/Images/Projects/YoutubeClone/LandingPage.png";
import ytcLandingPageSearch from "../src/Images/Projects/YoutubeClone/LandingPageSearch.png";
import ytcSearchResults from "../src/Images/Projects/YoutubeClone/SearchResults.png";
import ytcVideoPageNoLogin from "../src/Images/Projects/YoutubeClone/VideoPageNoLogin.png";
import ytcVideoPageComment from "../src/Images/Projects/YoutubeClone/VideoPageComment2.png";
import ytcVideoPageCommentAndReply from "../src/Images/Projects/YoutubeClone/VideoPageCommentAndReply.png";

const skills = [
  {
    skill_name: "Python",
    icon_url: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
  },
  {
    skill_name: "Javascript",
    icon_url: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  },
  {
    skill_name: "Java",
    icon_url: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png",
  },
  {
    skill_name: "React.js",
    icon_url: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
  },
  {
    skill_name: "CSS 3",
    icon_url: "https://cdn-icons-png.flaticon.com/128/5968/5968242.png",
  },
  {
    skill_name: "HTML 5",
    icon_url: "https://cdn-icons-png.flaticon.com/128/5968/5968267.png",
  },
  {
    skill_name: "Bootstrap",
    icon_url: "https://cdn-icons-png.flaticon.com/128/5968/5968672.png",
  },
  {
    skill_name: "Git & GitHub",
    icon_url: "https://cdn-icons-png.flaticon.com/128/5968/5968866.png",
  },
];

const projects = [
  {
    project_name: "Morris Delta Realty",
    project_thumbnail: CapstoneLandingPage,
    project_description: "Real Estate Application",
    project_thumbnail_cards: [
      {
        thumbnail: CapstonePropertiesPageCarousel,
        thumbnail_description: "thumnail 1",
      },
      {
        thumbnail: CapstonePropertiesPageCard,
        thumbnail_description: "thumnail 2",
      },
      {
        thumbnail: CapstoneMapsAndNeighorsPage,
        thumbnail_description: "thumnail 3",
      },
      {
        thumbnail: CapstoneContactUsModal,
        thumbnail_description: "thumnail 4",
      },
      {
        thumbnail: CapstoneContactUsValidation,
        thumbnail_description: "thumnail 5",
      },
    ],
  },
  {
    project_name: "Youtube Clone",
    project_thumbnail: ytcLandingPage,
    project_description: "Youtube CLone Desc",
    project_thumbnail_cards: [
      {
        thumbnail: ytcLandingPageSearch,
        thumbnail_description: "thumnail 1",
      },
      {
        thumbnail: ytcSearchResults,
        thumbnail_description: "thumnail 1",
      },
      {
        thumbnail: ytcVideoPageNoLogin,
        thumbnail_description: "thumnail 1",
      },
      {
        thumbnail: ytcVideoPageComment,
        thumbnail_description: "thumnail 1",
      },
      {
        thumbnail: ytcVideoPageCommentAndReply,
        thumbnail_description: "thumnail 1",
      },
    ],
  },
];

export default { skills, projects };

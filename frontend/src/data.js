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
    link: "https://www.python.org/",
    description:
      "Python is a programming language that lets you work more quickly and integrate your systems more effectively.",
  },
  {
    skill_name: "Javascript",
    icon_url: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    link: "https://www.javascript.com/",
    description:
      "Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers.",
  },
  {
    skill_name: "Java",
    icon_url: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png",
    link: "https://www.java.com/en/",
    description:
      "Java is a programming language and computing platform first released by Sun Microsystems in 1995.",
  },
  {
    skill_name: "React.js",
    icon_url: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
    link: "https://reactjs.org/",
    description: "A JavaScript library for building user interfaces",
  },
  {
    skill_name: "CSS 3",
    icon_url: "https://cdn-icons-png.flaticon.com/128/5968/5968242.png",
    link: "https://www.w3schools.com/css/",
    description:
      "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
  },
  {
    skill_name: "HTML 5",
    icon_url: "https://cdn-icons-png.flaticon.com/128/5968/5968267.png",
    link: "https://www.w3schools.com/html/",
    description:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website.",
  },
  {
    skill_name: "Bootstrap",
    icon_url: "https://cdn-icons-png.flaticon.com/128/5968/5968672.png",
    link: "https://getbootstrap.com/",
    description:
      "Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.",
  },
  {
    skill_name: "Git & GitHub",
    icon_url: "https://cdn-icons-png.flaticon.com/128/5968/5968866.png",
    link: "https://github.com/",
    description:
      "GitHub is a code hosting platform for version control and collaboration. Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
  },
];

const projects = [
  {
    project_name: "Morris Delta Realty",
    project_url: "https://fmorris825.github.io/morris-delta-realty/",
    project_thumbnail: CapstoneLandingPage,
    project_description:
      "Morris Delta Realty is a Real Estate Application that displays properties for sale and rent by the realty firm. Allows for site administraion throught a login feature by utilizing JWT Authorization. Once logged in Administratiors ",
    tech_stack: [
      {
        technology: "React.js",
      },
      {
        technology: "React-Boostrap Library",
      },
      {
        technology: "Django REST Framework",
      },
      {
        technology: "Google Places API",
      },
      {
        technology: "MySQL Workbench",
      },
      {
        technology: "Git & Github",
      },
      {
        technology: "JWT Authorization",
      },
      {
        technology: "Postman",
      },
      {
        technology: "Abstract Email API",
      },
    ],
    project_thumbnail_cards: [
      {
        thumbnail: CapstonePropertiesPageCarousel,
        thumbnail_description:
          "The Application provides exposure for the Firm and its properties to clients.",
      },
      {
        thumbnail: CapstonePropertiesPageCard,
        thumbnail_description:
          "Allows clients to view properties and thier details.",
      },
      {
        thumbnail: CapstoneMapsAndNeighorsPage,
        thumbnail_description:
          "Clients can see where properties are and what kind of business are near and in the neighborhood via a Google Maps plugin. (Google Places API)",
      },
      {
        thumbnail: CapstoneContactUsModal,
        thumbnail_description:
          "Clients can leave an inquiry on for the firm through the 'Contact Us' button at the top right of the screen to access a form with Email Validation. (Abstract Email API)",
      },
      {
        thumbnail: CapstoneContactUsValidation,
        thumbnail_description:
          "A validation message appears if the inquiry was successfully submitted and email was valid.",
      },
    ],
  },
  {
    project_name: "Youtube Clone",
    project_thumbnail: ytcLandingPage,
    project_description:
      "A video player application modeled after YouTube to display videos, related videos, and played selected videos. Also includes “comment” and “reply” sections where users can interact with videos.",
    tech_stack: [
      {
        technology: "React.js",
      },
      {
        technology: "React-Boostrap Library",
      },
      {
        technology: "Django REST Framework",
      },
      {
        technology: "Google Places API",
      },
      {
        technology: "MySQL Workbench",
      },
      {
        technology: "Git & Github",
      },
      {
        technology: "JWT Authorization",
      },
      {
        technology: "Postman",
      },
    ],
    project_thumbnail_cards: [
      {
        thumbnail: ytcLandingPageSearch,
        thumbnail_description:
          "Search bar functionality where user can search text and videos via the YouTube data base will return video related to the text search (YouTube API)",
      },
      {
        thumbnail: ytcSearchResults,
        thumbnail_description:
          "Users can then select a video from the search results and play the video in a video player on a new page.",
      },
      {
        thumbnail: ytcVideoPageNoLogin,
        thumbnail_description:
          "This Page will display related videos and comments and replies related to that video made by users, but users can only create new comments and replies if actively logged in. (JWT Authorization)",
      },
      {
        thumbnail: ytcVideoPageComment,
        thumbnail_description:
          "CRUD functionality for users to Create new comments and replies on the video player page within the application only if the User is logged in (Django REST Framework)",
      },
      {
        thumbnail: ytcVideoPageCommentAndReply,
        thumbnail_description:
          "Users can navigate to other videos via the related videos or back to the search another video within the search bar",
      },
    ],
  },
];

export default { skills, projects };

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="d-flex flex-column javascriptText">
      <p className="JavascriptText1">
        <a href="https://codepen.io/grohit/">Hello, I'm Fredrick Morris</a>
      </p>
      <p className="JavascriptText2">
        <a href="https://codepen.io/grohit/">I am a fullstack Devloper</a>
      </p>
      {/* Linked in Badge
        <div
            class="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="fred-morris-623107235"
            data-version="v1"
        >
            <a
            class="badge-base__link LI-simple-link"
            href="https://www.linkedin.com/in/fred-morris-623107235?trk=profile-badge"
            >
            Fred Morris
            </a>
        </div> */}
    </div>
  );
};

export default LandingPage;

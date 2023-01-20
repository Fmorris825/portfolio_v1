const LinkedInBadge = () => {
  return (
    <div>
      <script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      ></script>
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
      </div>
    </div>
  );
};

export default LinkedInBadge;

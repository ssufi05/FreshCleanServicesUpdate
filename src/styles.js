const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-logoColor lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-logoColor font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

const bannerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
  height: "20vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const navbar = {
  backgroundColor: "#3d8fdb",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.2rem",
  position: "sticky",
  top: "0",
  zIndex: "999",
};

const bannerButton = {
  fontSize: "14px",
  fontWeight: "600",
  padding: "15px 30px",
  color: "#000",
  backgroundColor: "#fff",
  borderRadius: "4px",
  cursor: "pointer",
  border: "none",
  outline: "none",
  transition: "0.2s",
};

export { styles, bannerStyle, bannerButton };

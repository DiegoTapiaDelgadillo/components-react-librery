import ProfilePhoto from "./../../assets/profilePhoto.jpg";
import SocialLinksProfile from "../../components/Social-Links-Profile";
export default function SocialLinksProfilePage() {
  const data = [
    { socialMediaLink: "", socialMediaName: "GitHub" },
    { socialMediaLink: "", socialMediaName: "Frontend Mentor" },
    { socialMediaLink: "", socialMediaName: "Linkedln" },
    { socialMediaLink: "", socialMediaName: "Twitter" },
    { socialMediaLink: "", socialMediaName: "Instagram" },
  ];

  return (
    <SocialLinksProfile
      img={ProfilePhoto}
      name={"Jessica Randall"}
      address={"London, United Kingdom"}
      job={'"Front-end developer and avid reader"'}
      socialMedia={data}
    />
  );
}

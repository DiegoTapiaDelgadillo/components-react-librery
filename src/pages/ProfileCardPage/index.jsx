import ProfileCard from "../../components/Profile-Card-Component";
import Photo from "../../assets/profilePhoto.jpg";
export default function ProfileCardPage() {
  return (
    <ProfileCard
      img={Photo}
      name={"Victor Crest "}
      age={"27"}
      city={"London"}
    />
  );
}

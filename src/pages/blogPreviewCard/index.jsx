import Coding from "./../../assets/coding.jpg";
import AutorPhoto from "./../../assets/profilePhoto.jpg";
import BlogPreviewCard from "../../components/Blog-Preview-Card";
export default function BlogPreviewCardPage() {
  return (
    <BlogPreviewCard
      img={Coding}
      date={"21 Dec 2023"}
      title={"HTML & CSS foundations"}
      body={
        "HTML & CSS Foundations is a beginner-level course focusing on the essential building blocks of web development. "
      }
      autorPhoto={AutorPhoto}
      name={"Jessica Randall"}
    />
  );
}

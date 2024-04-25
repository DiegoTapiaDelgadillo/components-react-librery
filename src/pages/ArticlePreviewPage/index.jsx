import ArticlePreview from "../../components/Article-preview";
import Mueble from "../../assets/kam-idris-_HqHX3LBN18-unsplash.jpg";
import Photo from "../../assets/profilePhoto.jpg";
export default function ArticlePreviewPage() {
  return (
    <ArticlePreview
      img={Mueble}
      profilePhoto={Photo}
      name={"Michelle Appleton"}
      date={"28 Jun 2020"}
    />
  );
}

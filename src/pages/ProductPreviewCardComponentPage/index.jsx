import Perfume from "./../../assets/perfume.jpg";
import ProductPreviewCardComponent from "../../components/Product-Preview-Card-Component";
export default function ProductPreviewCardComponentPage() {
  return (
    <ProductPreviewCardComponent
      img={Perfume}
      title={"Gabrille Essence Eau De Parfum"}
      description={
        "Enchanted Twilight is a captivating fragrance that transports you to a world of mystery and allure."
      }
      price={"149.99"}
      discount={"169.99"}
    />
  );
}

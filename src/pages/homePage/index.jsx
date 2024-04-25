import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <ol>
      <Link to={"/"}>
        <li>Home</li>
      </Link>
      <Link to={"/social-link-profile"}>
        <li>Social Links Profile</li>
      </Link>
      <Link to={"/blog-preview-card"}>
        <li>blog Preview Card</li>
      </Link>
      <Link to={"/results-summary-component"}>
        <li>Results summary component</li>
      </Link>
      <Link to={"/product-preview-card-component"}>
        <li>Product preview card component</li>
      </Link>
      <Link to={"/interactive-rating-component"}>
        <li>Interactive rating component</li>
      </Link>
      <Link to={"/nft-preview-card-component"}>
        <li>nft preview card component</li>
      </Link>
      <Link to={"/Order-summary-component"}>
        <li>Order summary component</li>
      </Link>
      <Link to={"/stats-preview-card-component"}>
        <li>Stats preview card component</li>
      </Link>
    </ol>
  );
}

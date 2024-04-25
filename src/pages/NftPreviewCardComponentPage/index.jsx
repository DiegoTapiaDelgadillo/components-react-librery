import Nft from "../../assets/xotSzrQr_400x400.jpg";
import Photo from "../../assets/profilePhoto.jpg";
import NftPreviewCardComponent from "../../components/Nft-Preview-Card-Component";
export default function NftPreviewCardComponentPage() {
  return (
    <NftPreviewCardComponent
      img={Nft}
      titleCard={"Equilibrium #3429"}
      textCard={"Our Equilibrium collection promotes balance and calm."}
      price={0.041}
      date={"3 days left"}
      profilePhoto={Photo}
      autorName={"Jules Wyvern"}
    />
  );
}

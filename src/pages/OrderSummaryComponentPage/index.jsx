import OrderSummaryComponent from "../../components/Order-Summary-Component";
import Sumarry from "../../assets/undraw_order_delivered_re_v4ab.svg";
export default function OrderSummaryComponentPage() {
  return (
    <>
      <OrderSummaryComponent
        img={Sumarry}
        textCard={
          "You can now listen to millons of songs, audibooks, and podcasts on any device anywhere you like!"
        }
        price={"59.99/year"}
      />
    </>
  );
}

import css from "./PricingTable.module.css";

export const PricingTable = () => {
  return (
    <div className={css.stripe}>
      <stripe-pricing-table
        pricing-table-id="prctbl_1QPpmxG4qdXnQCQo7QhS2pGM"
        publishable-key="pk_test_51QPXoRG4qdXnQCQoKQWPlVdFo4udo1sWBIs0di4XFqSoNXA1t1Asuxpab87jZMARZ7RndxyGMr2tVPm1nbn9eBxU00pPQkxnmd"
      ></stripe-pricing-table>
    </div>
  );
};

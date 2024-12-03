import css from "./Buy.module.css";
import { PricingTable } from "../PricingTable";

export const Buy = () => {
  return (
    <>
      <div calssName={css.buy}>
        <div className={css.wrapper}>
          <div className={css.box}>
            <h3 className={css.sentence}>
              ZAPRASZAMY DO ROZMOWY NA KAŻDY TEMAT
            </h3>
          </div>
          <PricingTable />
          <div className={css.box}>
            <h3 className={css.sentence}>
              POZOSTAW COŚ PO SOBIE I NAPISZ OPINIĘ
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

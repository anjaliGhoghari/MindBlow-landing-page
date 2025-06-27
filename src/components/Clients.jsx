import React from "react";
import styles from "../style";
import { clients } from "../constants";

const Clients = () => (
  <section
    className={` ${styles.paddingY} flex justify-center flex-col items-center`}
  >
    <div className="flex justify-center items-center flex-wrap w-full">
      {clients.map((client) => (
        <div
          key={client.id}
          className="flex justify-center items-center flex-1 sm:min-w-[192px] m-4 min-w-[120px] "
        >
          <img
            src={client.logo}
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;

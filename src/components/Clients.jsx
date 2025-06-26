import React from "react";

import { clients } from "../constants";

const Clients = () => (
  <section
    className={` flex justify-center flex-col items-center mb-0  sm:mb-20`}
  >
    <div className="flex justify-center items-center flex-wrap w-full">
      {clients.map((client) => (
        <div
          key={client.id}
          className="flex justify-center items-center flex-1 m-5 sm:min-w-[192px] min-w-[120px] "
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

// TS

import type { FC } from "react";
import React from "react";
import styles from "./pilots-grid.module.scss";
// import PilotsGridItem from "../pilots-grid-item";

interface IGridOptions {
  title?: string;
  browseAllVisible: boolean;
  browseLinkRedirect?: string;
}

interface IPilot {
  id: string;
  name: string;
  faction: string;
  imgUrl: string;
}

interface PilotsGridItemProps {
  pilot: IPilot;
}

const PilotsGridItem: FC<PilotsGridItemProps> = ({ pilot }) => {
  return (
    <a
      className={styles["pilots-grid-item"]}
      href={"http://www.google.com"}
      data-auto={"pilots-grid-item"}
      aria-label={pilot.name}
    >
      <span>
        <img src={pilot.imgUrl} alt={pilot.name}></img>
        <div className={styles["pilots-grid-item-info"]}>
          <p
            className={styles["pilots-grid-item-name"]}
            dangerouslySetInnerHTML={{ __html: pilot.name }}
            data-auto="pilots-grid-item-name"
          ></p>
          <p
            className={styles["pilots-grid-item-faction"]}
            data-auto="pilots-grid-item-faction"
          >
            {pilot.faction}
          </p>
         <button>Details</button>
        </div>
      </span>
    </a>
  );
};



const PilotsGrid: FC<IGridOptions> = ({
  title,
  browseAllVisible,
  browseLinkRedirect,
}) => {

    // DATA
  const pilots = [
                      {
                        id: "2",
                        name: "Wedge Antilles",
                        faction: "Rebels",
                        imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg?20180113073717",
                      },
                      {
                        id: "8",
                        name: "Ciena Ree",
                        faction: "Empire",
                        imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fjedipedia%2Fimages%2F9%2F98%2FCiena_Ree_-_WOTG.jpg%2Frevision%2Flatest%3Fcb%3D20181006160137%26path-prefix%3Dde&f=1&nofb=1&ipt=91307f8bfe9022b6d8722a566038b724d09a1d415bac6b49d9a3a3efa8b9bfb1&ipo=images",
                      },
                      {
                        id: "40",
                        name: "Iden Versio",
                        faction: "Empire",
                        imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/11/Iden_Versio.png?20180103225636",
                      },
                      {
                        id: "66",
                        name: "Thane Kyrell",
                        faction: "Rebels",
                        imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fstarwars%2Fimages%2Fe%2Fe0%2FThaneKyrell.jpg%2Frevision%2Flatest%3Fcb%3D20180511032924&f=1&nofb=1&ipt=49daebd390799e3a2f654c1373e615882e1e456ea96f1d5b642b4caf1f64ab12&ipo=images",
                      }
                    ];

  return (
    <main className={styles["pilots-grid"]}>
      <article className={styles["pilots-grid__content"]}>
        {pilots.map((pilot, index) => (
          <PilotsGridItem key={index} pilot={pilot} />
        ))}
      </article>
    </main>
  );
};

export default PilotsGrid;

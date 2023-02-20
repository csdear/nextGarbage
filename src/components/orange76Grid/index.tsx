import { FC } from "react";
import styles from "./orange76Grid.module.scss";

interface Orange76GridCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
}

const Orange76GridCard: FC<Orange76GridCardProps> = ({ title, description, buttonText, imageUrl, imageAlt }) => {
  return (
    <article className={styles["card"]}>
      <img className={styles["card__img"]} src={imageUrl} alt={imageAlt} />
      <div className={styles["card__text"]}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </article>
  );
};

const Orange76Grid: React.FC = () => {
  return (
    <div className={styles["cards"]}>
      <h3 className={styles["cards__header"]}>Orange76 Display Grid</h3>
      <div className={styles["cards__items-wrapper"]}>
      <Orange76GridCard
        title="Seamlessly visualize quality"
        description="Collaboratively administrate empowered markets via plug-and-play networks."
        buttonText="Here's why"
        imageUrl="/static/23m.jpg"
        imageAlt="Sample photo"
      />
      <Orange76GridCard
        title="Completely Synergize"
        description="Dramatically engage seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing."
        buttonText="Here's how"
        imageUrl="/static/24m.jpg"
        imageAlt="Sample photo"
      />
      <Orange76GridCard
        title="Dynamically Procrastinate"
        description="Completely synergize resource taxing relationships via premier niche markets."
        buttonText="Read more"
        imageUrl="/static/22l.jpg"
        imageAlt="Sample photo"
      />
      <Orange76GridCard
        title="Best in class"
        description="Imagine jumping into that boat, and just letting it sail wherever the wind takes you..."
        buttonText="Just do it..."
        imageUrl="/static/15l.jpg"
        imageAlt="Sample photo"
      />
      <Orange76GridCard
        title="Dynamically innovate supply chains"
        description="Holisticly predominate extensible testing procedures for reliable supply chains."
        buttonText="Here's why"
        imageUrl="/static/25m.jpg"
        imageAlt="Sample photo"
      />
      <Orange76GridCard
        title="Sanity check"
        description="Objectively innovate empowered manufactured products whereas parallel platforms."
        buttonText="Stop here"
        imageUrl="/static/16l.jpg"
        imageAlt="Sample photo"
      />
      </div>
    </div>
  );
};

export default Orange76Grid;
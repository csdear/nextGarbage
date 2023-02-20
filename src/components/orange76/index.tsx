import { FC } from "react";
import styles from "./orange76.module.scss";

interface Orange76CardProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
}

const Orange76Card: FC<Orange76CardProps> = ({ title, description, buttonText, imageUrl, imageAlt }) => {
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

const Orange76: React.FC = () => {
  return (
    <div className={styles["cards"]}>
      <Orange76Card
        title="Seamlessly visualize quality"
        description="Collaboratively administrate empowered markets via plug-and-play networks."
        buttonText="Here's why"
        imageUrl="/static/23m.jpg"
        imageAlt="Sample photo"
      />
      <Orange76Card
        title="Completely Synergize"
        description="Dramatically engage seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing."
        buttonText="Here's how"
        imageUrl="/static/24m.jpg"
        imageAlt="Sample photo"
      />
      <Orange76Card
        title="Dynamically Procrastinate"
        description="Completely synergize resource taxing relationships via premier niche markets."
        buttonText="Read more"
        imageUrl="/static/22l.jpg"
        imageAlt="Sample photo"
      />
      <Orange76Card
        title="Best in class"
        description="Imagine jumping into that boat, and just letting it sail wherever the wind takes you..."
        buttonText="Just do it..."
        imageUrl="/static/15l.jpg"
        imageAlt="Sample photo"
      />
      <Orange76Card
        title="Dynamically innovate supply chains"
        description="Holisticly predominate extensible testing procedures for reliable supply chains."
        buttonText="Here's why"
        imageUrl="/static/25m.jpg"
        imageAlt="Sample photo"
      />
      <Orange76Card
        title="Sanity check"
        description="Objectively innovate empowered manufactured products whereas parallel platforms."
        buttonText="Stop here"
        imageUrl="/static/16l.jpg"
        imageAlt="Sample photo"
      />
    </div>
  );
};

export default Orange76;
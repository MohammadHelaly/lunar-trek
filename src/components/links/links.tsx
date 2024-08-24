import { GitHub, Kaggle, OpenAi, VizWiz } from "@/assets/icons";
import Icon from "@/components/icon";

interface Props {
  variant?: "light" | "dark";
}

const Links = (props: Props) => {
  const { variant = "dark" } = props;

  const fillColor = variant === "light" ? "white" : "black";

  return (
    <div className="flex flex-row items-center justify-center gap-2 lg:gap-5">
      <Icon link="https://github.com/MohammadHelaly/neural-visions">
        <GitHub className={`size-8 rounded-sm fill-${fillColor}`} />
      </Icon>
      <Icon link="https://www.kaggle.com/code/mohammadhelaly/visual-question-answering">
        <Kaggle className={`size-8 rounded-sm fill-${fillColor}`} />
      </Icon>
      <Icon link="https://openai.com/research/clip">
        <OpenAi className={`size-8 rounded-sm fill-${fillColor}`} />
      </Icon>
      <Icon link="https://vizwiz.org/tasks-and-datasets/vqa/">
        <VizWiz className={`size-10 rounded-sm fill-${fillColor}`} />
      </Icon>
    </div>
  );
};

export default Links;

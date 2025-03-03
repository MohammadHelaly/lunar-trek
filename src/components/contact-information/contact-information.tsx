import Icon from "@/components/icon";
import { Email, GitHub, LinkedIn } from "@/assets/icons";

interface Props {
  photo: string;
  name: string | React.ReactNode;
  emailLink: string;
  githubLink: string;
  linkedinLink: string;
}

const ContactInformation = (props: Props) => {
  const { photo, name, emailLink, githubLink, linkedinLink } = props;
  return (
    <div className="group flex h-20 w-full flex-row items-center justify-between rounded-none border-2 border-gray bg-muted transition-colors duration-[200ms] hover:border-blue hover:bg-white md:h-24">
      <div className="flex h-full flex-row items-center gap-2 xl:gap-3">
        <img
          src={photo}
          alt={typeof name === "string" ? name : "Profile Photo"}
          className="aspect-square h-full rounded-none"
        />
        <h3 className="font-futura text-xl font-light text-white transition-colors duration-[200ms] group-hover:text-blue max-[370px]:text-base md:text-2xl xl:text-3xl">
          {name}
        </h3>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 px-2 xl:gap-4">
        <Icon link={emailLink} name={name + "'s Email"}>
          <Email className="size-6 fill-white transition-colors duration-[200ms] group-hover:fill-blue md:size-7 lg:size-9" />
        </Icon>
        <Icon link={linkedinLink} name={name + "'s LinkedIn"}>
          <LinkedIn className="size-5 fill-white transition-colors duration-[200ms] group-hover:fill-blue md:size-6 lg:size-8" />
        </Icon>
        <Icon link={githubLink} name={name + "'s GitHub"}>
          <GitHub className="size-5 fill-white transition-colors duration-[200ms] group-hover:fill-blue md:size-6 lg:size-8" />
        </Icon>
      </div>
    </div>
  );
};

export default ContactInformation;

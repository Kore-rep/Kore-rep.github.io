import IconBar from "../iconBar/iconBar";
import LinkIcon from "../linkIcon/linkIcon";
import { ReactComponent as LinkedInIcon } from "../../assets/icon-linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/icon-github.svg";
import { ReactComponent as EmailIcon } from "../../assets/icon-email.svg";

export default function SocialMediaIconBar() {
  const linkedInIcon = (
    <LinkIcon key="linkedIn" Icon={LinkedInIcon} link="https://www.linkedin.com" />
  );
  const githubIcon = (
    <LinkIcon key="github" Icon={GithubIcon} link="https://www.github.com/kore-rep" />
  );
  const emailIcon = (
    <LinkIcon key="email" Icon={EmailIcon} link="mailto:anguslongmora@gmail.com" />
  );
  const iconsList = [linkedInIcon, githubIcon, emailIcon];
  return <IconBar icons={iconsList} />;
}

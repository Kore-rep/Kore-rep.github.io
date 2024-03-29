import IconBar from "../iconBar/iconBar";
import LinkIcon from "../linkIcon/linkIcon";
import { ReactComponent as LinkedInIcon } from "../../assets/icon-linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/icon-github.svg";
import { ReactComponent as EmailIcon } from "../../assets/icon-email.svg";

export default function SocialMediaIconBar() {
  const linkedInIcon = (
    <LinkIcon
      key="linkedIn"
      Icon={LinkedInIcon}
      link={process.env.REACT_APP_SOCIAL_LINKEDIN_LINK}
    />
  );
  const githubIcon = (
    <LinkIcon
      key="github"
      Icon={GithubIcon}
      link={process.env.REACT_APP_SOCIAL_GITHUB_LINK}
    />
  );
  const emailIcon = (
    <LinkIcon
      key="email"
      Icon={EmailIcon}
      link={"mailto:" + process.env.REACT_APP_SOCIAL_EMAIL_LINK}
    />
  );
  const iconsList = [linkedInIcon, githubIcon, emailIcon];
  return <IconBar icons={iconsList} />;
}

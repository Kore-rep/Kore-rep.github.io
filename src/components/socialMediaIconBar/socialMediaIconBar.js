import IconBar from "../iconBar/iconBar";
import LinkIcon from "../linkIcon/linkIcon";
import { FaEnvelope as EmailIcon } from "react-icons/fa";
import { FaGithubSquare as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa";

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

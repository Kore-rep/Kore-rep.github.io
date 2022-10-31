import './socialMediaIconBar.scss';
import { IconBar } from '../iconBar/iconBar';
import { LinkIcon } from '../linkIcon/linkIcon';
import { ReactComponent as LinkedInIcon } from '../../assets/icon-linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../assets/icon-github.svg';

export default function SocialMediaIconBar(props) {
    const linkedInIcon = (
        <LinkIcon Icon={LinkedInIcon} link="https://www.linkedin.com" />
    );
    const githubIcon = (
        <LinkIcon Icon={GitHubIcon} link="https://www.github.com" />
    );
    return <IconBar LeftIcon={linkedInIcon} RightIcon={githubIcon} />;
}

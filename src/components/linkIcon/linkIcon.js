import './linkIcon.scss';
export function LinkIcon(props) {
    const { link, Icon } = props;

    return (
        <a href={link}>
            <Icon className="barIcon" />
        </a>
    );
}

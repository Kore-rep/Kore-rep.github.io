import './linkIcon.scss';
export default function LinkIcon(props) {
    const { link, Icon, key } = props;

    return (
        <div id="container">
            <div id="halfclip">
                <div className="halfcircle" id="clipped" />
            </div>

            <div className="halfcircle" id="fixed" />
            <a
                className="linkContainer"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon className="barIcon" />
            </a>
        </div>
    );
}

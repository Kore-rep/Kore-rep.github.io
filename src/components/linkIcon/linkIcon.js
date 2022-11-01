import './linkIcon.scss';
export default function LinkIcon(props) {
    const { link, Icon } = props;

    return (
        // <div>
        //
        // </div>
        <div id="container">
            <div id="halfclip">
                <div class="halfcircle" id="clipped" />
            </div>

            <div class="halfcircle" id="fixed" />
            <a href={link} className="circleOutline">
                <Icon className="barIcon" />
            </a>
        </div>
    );
}

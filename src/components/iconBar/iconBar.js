import './iconBar.scss';

export function IconBar(props) {
    const { LeftIcon, MiddleIcon, RightIcon } = props;
    return (
        <div className="iconContainer">
            {LeftIcon}
            {MiddleIcon}
            {RightIcon}
        </div>
    );
}

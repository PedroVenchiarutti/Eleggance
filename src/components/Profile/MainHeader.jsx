import "./MainHeader.scss"

export default props => (
    <header className="profile-main-header">
        <h4>{props.title ?? ''}</h4>
        <span>{props.text}</span>
    </header>
)
import "./MainHeader.scss"

export default props => (
    <header className="profile-main-header">
        <div className="content">
            <h4>{props.title ?? ''}</h4>
            <span>{props.children}</span>
        </div>
    </header>
)
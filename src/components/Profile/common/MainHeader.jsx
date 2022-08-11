import "./MainHeader.scss"

export default ({children, title}) => (
    <header className="profile-main-header">
        <div className="content">
            <h4>{title ?? ''}</h4>
            <span>{children}</span>
        </div>
    </header>
)
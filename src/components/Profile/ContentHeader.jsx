import './ContentHeader.scss'

export default props => (
    <header className="profile-content-header">
        <p>
            { props.title }
        </p>
        <div>
            { props.children }
        </div>
    </header>
)
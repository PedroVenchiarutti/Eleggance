import './ContentHeader.scss'

export default props => (
    <header className="profile-content-header">
        <h4>
            { props.title }
        </h4>
        <div>
            { props.children }
        </div>
    </header>
)
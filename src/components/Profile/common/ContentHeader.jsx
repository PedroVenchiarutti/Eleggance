import './ContentHeader.scss'

export default ({children, title}) => (
    <header className="profile-content-header">
        <h4>
            { title }
        </h4>
        <div>
            { children }
        </div>
    </header>
)
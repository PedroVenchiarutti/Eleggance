import './Select.scss'

export default props => (
    <div className="profile-select-div">
        <p>{ props.label }</p>
        <select>
            {props.options.map(option => { return <option value={option.value}>{option.value}</option> })}
        </select>
    </div>
)
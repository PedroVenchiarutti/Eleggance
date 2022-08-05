import './Select.scss'

export default props => (
    <div className="profile-select-div">
        <select>
            <option defaultValue="">ORDENAR POR</option>
            {props.options.map(option => { return <option value={option.value}>{option.value}</option> })}
        </select>
    </div>
)
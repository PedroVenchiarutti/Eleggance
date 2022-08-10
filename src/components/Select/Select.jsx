import './Select.scss'

export default props => {
    return (
        <div className="profile-select-div">
            <select defaultValue="" onChange={e => props.onChange(e)}>
                <option defaultChecked value="">ORDENAR POR</option>
                {props.options.map(option => { return <option value={option.value}>{option.text}</option> })}
            </select>
        </div>
    )
}
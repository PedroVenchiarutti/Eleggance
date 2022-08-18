import './Select.scss'

export default ({ onChange, options }) => {
    return (
        <div className="profile-select-div">
            <select defaultValue="" onChange={e => onChange(e)}>
                <option defaultChecked value="">ORDENAR POR</option>
                {options.map(option => { return <option value={option.value}>{option.text}</option> })}
            </select>
        </div>
    )
}
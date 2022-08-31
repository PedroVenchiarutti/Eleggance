import './Select.scss'

export default ({ onChange, defaultValue, options }) =>
    <div className="select-div">
        <select defaultValue="" onChange={e => onChange(e)}>
            <option defaultChecked value="">{defaultValue.toUpperCase() ?? "ORDENAR POR"}</option>
            {options.map(option => { return <option key={option.value} value={option.value}>{option.text}</option> })}
        </select>
    </div>
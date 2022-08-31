import './Select.scss'

export default ({ onChange, defaultValueLabel = "ORDERNAR POR", options }) =>
    <div className="select-div">
        <select defaultValue="" onChange={e => onChange(e)}>
            <option defaultChecked value="">{defaultValueLabel.toUpperCase()}</option>
            {options.map(option => { return <option key={option.value} value={option.value}>{option.text}</option> })}
        </select>
    </div>
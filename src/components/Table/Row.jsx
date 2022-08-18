export default ({ object }) =>
    <tr key={object.key ?? object.id}>
        {Object.keys(object).map(key => getRow(object, key))}
    </tr>

const getRow = (object, key) => {
    const value = object[key];
    if (key != "key" && key != "className")
        return value.type ? value : <td className={value.className}>{value}</td>
}
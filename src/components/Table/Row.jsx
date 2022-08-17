export default ({ object }) => (
    <tr className={object.key || object.id || object.code}>
        {
            Object.keys(object).map(key => {
                return object[key].type ? object[key] : <td className={object.className}>{object[key]}</td>
            })
        }
    </tr>
)
export default ({ object }) => (
    <tr key={object.key || object.id}>
        {
            Object.keys(object).map(key => {
                if (key != "key") return object[key].type ? object[key] : <td className={object.className}>{object[key]}</td>
            })
        }
    </tr>
)
export default ({ data, className }) => <tr> 
    { data.map(row => row.type ? row : <td className={className}>{row}</td>) }
</tr>
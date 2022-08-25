export default ({ columns, className }) =>
    <thead>
        <tr className={className}>
            {columns.map(column => column.type ? column : <th>{column}</th>)}
        </tr>
    </thead>

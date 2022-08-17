import Row from "./Row";

export default ({ rows, rowsClass }) => (
    <tbody>
        {rows.map(row => {
            return <Row data={row} className={rowsClass} />
        })}
    </tbody>
)
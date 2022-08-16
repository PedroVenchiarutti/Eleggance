import Row from "./Row";

export default ({ rows, rowsClass }) => (
    <tbody>
        {rows.map(row => <Row data={row} className={rowsClass} />)}
    </tbody>
)
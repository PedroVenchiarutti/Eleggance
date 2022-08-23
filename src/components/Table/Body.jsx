import Row from "./Row";

export default ({ bodyObjectsArray }) => (
    <tbody>
        {bodyObjectsArray.map(object => <Row object={object} />)}
    </tbody>
)
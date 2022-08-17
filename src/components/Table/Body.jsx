import Row from "./Row";

export default ({ objectsArray }) => (
    <tbody>
        {objectsArray.map(object => <Row object={object} />)}
    </tbody>
)
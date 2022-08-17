import Body from "./Body"
import Head from "./Head"

import './Table.scss'

export default ({ headerColumnsArray, headerClass, objectsArray }) =>
    <table>
        <Head className={headerClass} columns={headerColumnsArray} />
        <Body objectsArray={objectsArray} />
    </table>
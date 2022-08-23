import Body from "./Body"
import Head from "./Head"

import './Table.scss'

export default ({ headerColumnsArray, headerClass, bodyObjectsArray }) =>
    <table>
        <Head className={headerClass} columns={headerColumnsArray} />
        <Body bodyObjectsArray={bodyObjectsArray} />
    </table>
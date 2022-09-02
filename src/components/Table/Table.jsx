import Body from "./Body"
import Head from "./Head"

import './Table.scss'

export default ({ headerColumnsArray = [], bodyObjectsArray = [], headerClass }) =>
    <table>
        <Head className={headerClass} columns={headerColumnsArray} />
        <Body bodyObjectsArray={bodyObjectsArray} />
    </table>
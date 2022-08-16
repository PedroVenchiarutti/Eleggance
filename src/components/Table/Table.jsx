import Body from "./Body"
import Head from "./Head"

import './Table.scss'

export default ({ headerColumns, headerClass, bodyRows, rowsClass }) =>
    <table>
        <Head className={headerClass} columns={headerColumns} />
        <Body rows={bodyRows} rowsClass={rowsClass} />
    </table>

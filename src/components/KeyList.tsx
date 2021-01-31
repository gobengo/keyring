import * as React from "react";
import { Key, User } from "../domain";
export default KeyList;

export type KeyListProps = {
    keys: Key[],
    user: User,
}

export function KeyList(props: KeyListProps) {
    const log = makeLog('KeyList')
    log('debug', 'rendering', props)
    return <>
        <ul>
        {props.keys.map(
            (key) => <li>
                {key.name || 'nameless key'}
            </li>
        )}
        </ul>
    </>
}

function makeLog(name: string) {
    return (level: 'debug', ...loggables: any[]) => {
        console[level](`[${name}]`, ...loggables)
    }
}

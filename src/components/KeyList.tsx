import { Typography } from "@material-ui/core";
import * as React from "react";
import { Key, User } from "../domain";
import Button from "./Button";

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
                <Typography>{key.name || 'nameless key'}</Typography>
                <div>
                    <Button>Key Button</Button>
                </div>
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

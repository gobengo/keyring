import { Avatar, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from "@material-ui/core";
import * as React from "react";
import { Key, User } from "../domain";
import { makeLog } from "../log";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
export default KeyList;

export type KeyListProps = {
    keys: Key[],
    user: User,
}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export function KeyList(props: KeyListProps) {
    const log = makeLog('KeyList')
    const styles = useStyles();
    log('debug', 'rendering', props)
    return <>
        <div className={styles.root}>
            <List component="nav">
            {props.keys.map((key) => {
                return <ListItem button key={key.name}>
                    <ListItemAvatar>
                    <Avatar>
                        <VpnKeyIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={key.name} secondary={"ed25519 Key"} />
                </ListItem>
            })}
            </List>
        </div>
    </>
}

import { useState } from "react";
import KeyList from "../components/KeyList";
import { AnonymousUser, Key, User } from "../domain";

export default KeyringHomePage;

export type KeyringHomePageProps = {
    initialKeys: Key[],
    user: User,
}

export function KeyringHomePage(props: KeyringHomePageProps) {
    const [user, setUser] = useState<User>(AnonymousUser);
    const [keys, setKeys] = useState<Key[]>(props.initialKeys);
    return <>
        <h1>Keyring</h1>
        <KeyList keys={keys} user={user} />
    </>
}

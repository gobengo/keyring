import { useState } from "react";
import KeyList from "../components/KeyList";
import T from "@material-ui/core/Typography/Typography";

import { AnonymousUser, Key, User } from "../domain";
import Layout from "../layouts/KeyringAppLayout";

export default KeyringHomePage;

export type KeyringHomePageProps = {
    initialKeys: Key[],
    user: User,
}

export function KeyringHomePage(props: KeyringHomePageProps) {
    const [user, setUser] = useState<User>(AnonymousUser);
    const [keys, setKeys] = useState<Key[]>(props.initialKeys);
    return <>
        <Layout>
            <T variant="h2">Keyring</T>
            <KeyList keys={keys} user={user} />
        </Layout>
    </>
}

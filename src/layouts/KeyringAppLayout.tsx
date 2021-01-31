import { PropsWithChildren } from "react";
import BottomAppBar from "../components/BottomAppBar";

export default Layout;

export interface Props {}

export function Layout(props: PropsWithChildren<Props>) {
  return (
    <>
      <BottomAppBar>{props.children}</BottomAppBar>
    </>
  );
}

/// <reference types="react" />
declare module "library/NameContextProvider" {
    import React from "react";
    const _default: React.Context<{
        name: string;
        setName: (name: string) => void;
    }>;
    export default _default;
}
declare module "library/Button" {
    type Props = {};
    function ButtonMui({}: Props): JSX.Element;
    export default ButtonMui;
}

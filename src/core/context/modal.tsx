import React, {
    ReactNode,
    Fragment
} from "react";
import IOCoreContext, {
    ConfigType
} from "ncore-context";
import {
    ModalStateContextType,
    ModalContextType,
    ModalDataType
} from "../../types";
import BottomSheet from "../../components/bottomSheet";
import Dialog from "../../components/dialog";

class ModalStateContextInheritance extends IOCoreContext<ModalStateContextType, ConfigType<ModalStateContextType>> {
};

class ModalContextInheritance extends IOCoreContext<ModalContextType, ConfigType<ModalContextType>> {
    ModalStateContext: ModalStateContextInheritance;

    constructor(data: Array<ModalDataType>, config: ConfigType<ModalContextType>) {
        super({
            close: () => {},
            open: () => {},
            data: data
        }, config);

        this.ModalStateContext = new ModalStateContextInheritance(
            {
                data: data
            },
            {
                key: "modal-state-context"
            }
        );
    }

    open = (modalData: ModalDataType) => {
        let currentData = this.ModalStateContext.state.data;
        currentData.push(modalData);
        this.ModalStateContext.setState({
            data: currentData
        });
    };

    close = ({
        index,
        key
    }: {
        index?: number;
        key?: string;
    }) => {
        let currentData = this.ModalStateContext.state.data;

        if(key) {
            const keyIndex = currentData.findIndex((modal) => modal.key === key);
            if(keyIndex !== -1) {
                currentData.splice(keyIndex, 1);
                this.ModalStateContext.setState({
                    data: currentData
                });
            }
            return;
        }

        if(index !== undefined) {
            currentData.splice(index, 1);
            this.ModalStateContext.setState({
                data: currentData
            });
            return;
        }

        currentData.pop();
        this.ModalStateContext.setState({
            data: currentData
        });
    };

    StateAPI = ({
        children
    }: {
        children: ReactNode;
    }) => {
        const {
            data
        } = this.ModalStateContext.useContext();

        return <Fragment>
            {children}
            {
                data && data.length ? data.map((modal: ModalDataType, index: number) => {
                    if(modal.type === "dialog") {
                        return <Dialog
                            {...modal}
                            key={`dialog-${modal.key}-${index}`}
                        />;
                    }
                        
                    return <BottomSheet
                        {...modal}
                        key={`bottomSheet-${modal.key}-${index}`}
                    />;
                }) : null
            }
        </Fragment>;
    };

    Render = ({
        children
    }: {
        children: ReactNode
    }) => {
        const StateProvider = this.ModalStateContext.Provider;
        const StateAPI = this.StateAPI;
        const Provider = this.Provider;

        return <StateProvider>
            <Provider>
                <StateAPI>
                    {children}
                </StateAPI>
            </Provider>
        </StateProvider>;
    };
};
export default ModalContextInheritance;

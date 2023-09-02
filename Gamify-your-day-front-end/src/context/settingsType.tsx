type OptionsType = {
    render: (
        message: string,
        onConfirm: () => void,
        onCancel: () => void
    ) => JSX.Element;
};

export type { OptionsType };
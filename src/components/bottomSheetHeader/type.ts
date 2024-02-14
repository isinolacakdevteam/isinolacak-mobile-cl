interface IHeaderProps {
    titleVariant?: keyof IOCore.TypographyType;
    goBackFrontColor?: keyof IOCore.ColorsType;
    titleColor?: keyof IOCore.ColorsType;
    renderRightProps?: React.ReactNode;
    renderLeft?: () => React.ReactNode;
    isShowGoBack?: boolean;
    onGoBack?: () => void;
    title: string;
    size?: number;
};
export default IHeaderProps;

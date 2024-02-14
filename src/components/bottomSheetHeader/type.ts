interface IHeaderProps {
    titleVariant?: keyof IOCore.TypographyType;
    goBackFrontColor?: keyof IOCore.ColorsType;
    titleColor?: keyof IOCore.ColorsType;
    renderRightProps?: React.ReactNode;
    renderLeft?: () => React.ReactNode;
    showGoBackSize?: number;
    isShowGoBack?: boolean;
    onGoBack?: () => void;
    title: string;
};
export default IHeaderProps;

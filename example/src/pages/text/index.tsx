import React, {
    Dispatch,
    useState
} from "react";
import {
    View
} from "react-native";
import {
    Text as IOCoreText,
    PageContainer,
    IOCoreTheme,
    Button
} from "isinolacak-mobile-cl";
import stylesheet from "./stylesheet";

const variants: Array<keyof IOCore.TypographyType> = [
    "header1-regular",
    "header1-medium",
    "header1-semiBold",
    "header1-bold",
    "header2-regular",
    "header2-medium",
    "header2-semiBold",
    "header2-bold",
    "header3-regular",
    "header3-medium",
    "header3-semiBold",
    "header3-bold",
    "header4-regular",
    "header4-medium",
    "header4-semiBold",
    "header4-bold",
    "header5-regular",
    "header5-medium",
    "header5-semiBold",
    "header5-bold",
    "body-regular",
    "body-medium",
    "body-semiBold",
    "body-bold",
    "body2-regular",
    "body2-medium",
    "body2-semiBold",
    "body2-bold",
    "body3-regular",
    "body3-medium",
    "body3-semiBold",
    "body3-bold",
    "body4-regular",
    "body4-medium",
    "body4-semiBold",
    "body4-bold",
    "caption-regular",
    "caption-medium",
    "caption-semiBold",
    "caption-bold"
];

const colorList: Array<keyof IOCore.ColorsType> = [
    "primary",
    "secondary",
    "black",
    "white",
    "backgroundDark",
    "backgroundLight",
    "textDark",
    "textSecondary",
    "textGrey",
    "textWhite",
    "black50",
    "black100",
    "black200",
    "grey25",
    "grey50",
    "grey100",
    "grey200",
    "greyBase",
    "grey700",
    "stroke",
    "success",
    "success50",
    "error",
    "error50",
    "warning",
    "warning50"
];

const Text = () => {
    const [variant, setVariant]: [keyof IOCore.TypographyType, Dispatch<keyof IOCore.TypographyType>] = useState<keyof IOCore.TypographyType>("header1-regular");
    const [color, setColor]: [keyof IOCore.ColorsType, Dispatch<keyof IOCore.ColorsType>] = useState<keyof IOCore.ColorsType>("primary");
    const [value] = useState("Test Text");

    const {
        colors,
        spaces
    } = IOCoreTheme.useContext();

    return <PageContainer>
        <IOCoreText
            variant={variant}
            color={color}
        >
            {value}
        </IOCoreText>
        
        <View
            style={[
                stylesheet.seperator,
                {
                    backgroundColor: colors.seperator,
                    marginBottom: spaces.content * 2,
                    marginTop: spaces.content * 2
                }
            ]}
        />

        <Button
            title={`variant = ${variant}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                const currentIndex = variants.findIndex(e => e === variant);

                if(variants[currentIndex + 1]) {
                    // @ts-ignore
                    setVariant(variants[currentIndex + 1]);
                } else {
                    // @ts-ignore
                    setVariant(variants[0]);
                }
            }}
        />
        <Button
            title={`color = ${color}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                const currentIndex = colorList.findIndex(e => e === color);

                if(colorList[currentIndex + 1]) {
                    // @ts-ignore
                    setColor(colorList[currentIndex + 1]);
                } else {
                    // @ts-ignore
                    setColor(colorList[0]);
                }
            }}
        />
    </PageContainer>;
};
export default Text;

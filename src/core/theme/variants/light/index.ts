export const colors: Required<IOCore.ColorsType> = {
    "primary":          "#00C2A0",
    "body":             "#2A2A2A",
    "constrastBody":    "#F5F5F5",
    "layer1":           "#E5E5E5",
    "layer2":           "#F2F2F2",
    "layer3":           "#FAFAFA",
    "panel":            "#F2F2F2",
    "warning":          "#EBD147",
    "danger":           "#EB7E47",
    "success":          "#7EEB47",
    "accent":           "#EB4747",
    "attention":        "#EB477E",
    "info":             "#4799EB",
    "seperator":        "#cccccc",
    "hideBody":         "hsl(0, 0%, 60%)",
    "gray0":            "hsl(0, 0%, 0%)",
    "gray10":           "hsl(0, 0%, 10%)",
    "gray20":           "hsl(0, 0%, 20%)",
    "gray30":           "hsl(0, 0%, 30%)",
    "gray40":           "hsl(0, 0%, 40%)",
    "gray50":           "hsl(0, 0%, 50%)",
    "gray60":           "hsl(0, 0%, 60%)",
    "gray70":           "hsl(0, 0%, 70%)",
    "gray80":           "hsl(0, 0%, 80%)",
    "gray90":           "hsl(0, 0%, 90%)",
    "gray92":           "hsl(0, 0%, 92%)",
    "gray94":           "hsl(0, 0%, 94%)",
    "gray96":           "hsl(0, 0%, 96%)",
    "gray98":           "hsl(0, 0%, 98%)",
    "gray100":          "hsl(0, 0%, 100%)",
    "modalBackground":  "rgba(0, 0, 0, 0.5)"
};

export const typography: Required<IOCore.TypographyType> = {
    header1: {
        fontFamily: "Inter-Light",
        fontWeight: "300",
        lineHeight: 62.4,
        fontSize: 48
    },
    header2: {
        fontFamily: "Inter-Regular",
        fontWeight: "400",
        lineHeight: 41.6,
        fontSize: 32
    },
    header3: {
        fontFamily: "Inter-Medium",
        fontWeight: "500",
        lineHeight: 31.2,
        fontSize: 26
    },
    header4: {
        fontFamily: "Inter-Regular",
        fontWeight: "400",
        lineHeight: 26,
        fontSize: 22
    },
    header5: {
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        lineHeight: 26,
        fontSize: 22
    },
    header6: {
        fontFamily: "Inter-Regular",
        fontWeight: "400",
        lineHeight: 23.4,
        fontSize: 18
    },
    header7: {
        fontFamily: "Inter-Medium",
        fontWeight: "500",
        lineHeight: 23.4,
        fontSize: 16
    },
    header8: {
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        lineHeight: 20.8,
        fontSize: 14
    },
    header9: {
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        lineHeight: 20.8,
        fontSize: 12
    },
    body: {
        fontFamily: "Inter-Regular",
        fontWeight: "400",
        lineHeight: 22.72,
        fontSize: 14
    },
    caption: {
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        letterSpacing: -0.5,
        lineHeight: 14.4,
        fontSize: 10
    },
    buttonSmall: {
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        letterSpacing: 0.5,
        lineHeight: 20.72,
        fontSize: 12
    },
    buttonMedium: {
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        letterSpacing: 0.5,
        lineHeight: 22.72,
        fontSize: 14
    },
    buttonLarge: {
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        letterSpacing: 0.5,
        lineHeight: 24.72,
        fontSize: 16
    },
    overline: {
        fontFamily: "Inter-Regular",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: 2,
        fontSize: 12
    }
};

export const designTokens: Required<IOCore.DesignTokensType> = {
    spaces: {
        container: 20,
        content: 8,
        inline: 4,
        item: 20
    },
    borders: {
        indicator: 2,
        line: 1
    },
    radiuses: {
        quarter: 5,
        hard: 20,
        half: 10
    },
    disabled: {
        opacity: 0.33
    }
};

const theme: Required<IOCore.ThemeType> = {
    key: "light",
    designTokens,
    typography,
    colors,
};
export default theme;

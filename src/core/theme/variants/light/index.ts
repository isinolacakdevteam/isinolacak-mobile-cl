export const colors: Required<IOCore.ColorsType> = {
    "primary":          "#45BBD4",
    "secondary":        "#0B2636",
    "body":             "#2A2A2A",
    "constrastBody":    "#F5F5F5",
    "layer1":           "#E5E5E5",
    "layer2":           "#F2F2F2",
    "layer3":           "#FAFAFA",
    "panel":            "#F2F2F2",
    "warning":          "#F8AA1C",
    "warning50":        "#FEF7E8",
    "error":            "#DC2626",
    "error50":          "#FEF2F2",
    "danger":           "#EB7E47",
    "success":          "#16A34A",
    "success50":        "#F0FDF4",
    "accent":           "#EB4747",
    "attention":        "#EB477E",
    "info":             "#4799EB",
    "stroke":           "#E2E2E2",
    "seperator":        "#cccccc",
    "hideBody":         "hsl(0, 0%, 60%)",
    "black":            "#000000",
    "white":            "#FFFFFF",
    "backgroundDark":   "#0A0A0C",
    "backgroundLight":  "#FFFFFF",
    "textDark":         "#191919",
    "textSecondary":    "#9AA6BB",
    "textGrey":         "#A1A1A1",
    "textWhite":        "#FFFFFF",
    "black50":          "#F6F6F6",
    "black100":         "#E2E2E2",
    "black200":         "#D4D4D4",
    "grey25":           "#FAFAFA",
    "grey50":           "#F0F1F3",
    "grey100":          "#D1D4DA",
    "grey200":          "#BABFC8",
    "greyBase":         "#697488",
    "grey700":          "#4B5261",
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
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        fontSize: 50
    },
    header2: {
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        fontSize: 41
    },
    header3: {
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        fontSize: 33
    },
    header4: {
        fontFamily: "Inter-Medium",
        fontWeight: "500",
        fontSize: 27
    },
    header5: {
        fontFamily: "Inter-Medium",
        fontWeight: "500",
        fontSize: 22
    },
    header6: {
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        fontSize: 18
    },
    header7: {
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        fontSize: 16
    },
    body: {
        fontFamily: "Inter-Regular",
        fontWeight: "400",
        fontSize: 14
    },
    body2: {
        fontFamily: "Inter-Bold",
        fontWeight: "700",
        fontSize: 12
    },
    caption: {
        fontFamily: "Inter-Medium",
        fontWeight: "500",
        fontSize: 10
    }
};

export const designTokens: Required<IOCore.DesignTokensType> = {
    spaces: {
        container: 16,
        content: 8,
        inline: 4,
        item: 16
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

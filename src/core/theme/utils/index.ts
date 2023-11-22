import light from "../variants/light";
import dark from "../variants/dark";

const themes: Array<Required<IOCore.ThemeType>> = [light, dark];

export const mergeGivenTypographyWithIOCore = (themeKey: IOCore.ThemeKeyType, customTypography: IOCore.TypographyType | undefined): IOCore.TypographyType => {
    const defaultThemeTypography = themes.find(e => e.key === themeKey)?.typography ?? light.typography;

    if(!(customTypography)) {
        return defaultThemeTypography;
    }

    return {
        ...defaultThemeTypography,
        ...customTypography
    };
};

export const mergeGivenColorsWithIOCore = (themeKey: IOCore.ThemeKeyType, customColors: IOCore.ColorsType | undefined): IOCore.ColorsType => {
    const defaultThemeColors = themes.find(e => e.key === themeKey)?.colors ?? light.colors;

    if(!(customColors)) {
        return defaultThemeColors;
    }

    return {
        ...defaultThemeColors,
        ...customColors
    };
};

export const mergeGivenDesignTokensWithIOCore = (themeKey: IOCore.ThemeKeyType, customDesignTokens: IOCore.DesignTokensType | undefined): Required<IOCore.DesignTokensType> => {
    const defaultThemeDesignTokens = themes.find(e => e.key === themeKey)?.designTokens ?? light.designTokens;

    if(!(customDesignTokens)) {
        return defaultThemeDesignTokens;
    }

    const spaces: IOCore.SpacesTokensType = {
        ...defaultThemeDesignTokens.spaces,
        ...customDesignTokens.spaces ?? defaultThemeDesignTokens.spaces
    };

    const borders: IOCore.BordersTokensType = {
        ...defaultThemeDesignTokens.borders,
        ...customDesignTokens.borders ?? defaultThemeDesignTokens.borders
    };

    const radiuses: IOCore.RadiusesTokensType = {
        ...defaultThemeDesignTokens.radiuses,
        ...customDesignTokens.radiuses ?? defaultThemeDesignTokens.radiuses
    };

    const disabled: IOCore.DisabledTokensType = {
        ...defaultThemeDesignTokens.disabled,
        ...customDesignTokens.disabled ?? defaultThemeDesignTokens.disabled
    };

    return {
        spaces,
        borders,
        radiuses,
        disabled
    };
};

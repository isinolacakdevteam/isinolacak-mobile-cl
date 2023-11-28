type CalculateSvgSizeProps = {
    x: number;
    y: number;
};

type CalculateSvgSizeResult = {
    key: "x" | "y" | "xy";
    value: number;
};

export const calculateSvgLongSideSize = ({
    x,
    y
}: CalculateSvgSizeProps): CalculateSvgSizeResult => {
    if(x === y) {
        return {
            key: "xy",
            value: x
        };
    }

    if(x > y) {
        return {
            key: "x",
            value: x
        };
    }

    return {
        key: "y",
        value: y
    };
};

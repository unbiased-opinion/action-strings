import _ from "lodash";

export const deburr = (inputValue: string): string => {
    return _.deburr(inputValue);
}
import { MediaType, MediaTypeList, MediaTypeMap } from "./gatsby-theme-stitches/stitches.config";

export const parseMediaProps = (props: { [key: string]: any }, skip: string[] = [], parentKey: string | null = null) =>
    ((obj) => {
        MediaTypeList.forEach((mediaType) => {
            if (Object.keys(obj[mediaType]).length === 0) delete obj[mediaType];
        });

        if (parentKey) {
            return Object.keys({ ...obj }).reduce((newObj, mediaType) => {
                newObj[mediaType as MediaType] = { [parentKey]: obj[mediaType as MediaType] };
                return newObj;
            }, {} as MediaTypeMap<any>);
        } else {
            return obj;
        }
    })(
        MediaTypeList.reduce(
            (obj) => {
                Object.keys(props).forEach((key) => {
                    if (["children", ...skip].includes(key)) return;
                    const prop = props[key];
                    if (!prop) {
                    } else if (typeof prop !== "object") {
                        obj["@i"][key] = prop;
                    } else {
                        Object.keys(prop).forEach((mediaType) => {
                            obj[mediaType as MediaType][key] = prop[mediaType];
                        });
                    }
                });

                return obj;
            },
            MediaTypeList.reduce((obj, mediaType) => ((obj[mediaType] = {}), obj), {} as MediaTypeMap<any>)
        )
    );
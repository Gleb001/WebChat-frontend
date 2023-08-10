export const getValuesForm = (formRef: HTMLFormElement) => {
    let data = new FormData(formRef);
    let values = {};
    // @ts-ignore
    for (const [name, value] of data) {
        // @ts-ignore
        values[name] = value;
    }
    return values;
};
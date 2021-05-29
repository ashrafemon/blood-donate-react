// Headers for Fetch Api
export const jsonTypeHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
};
export const formTypeHeaders = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
};

export const validateErrorPusher = (obj) => {
    let errors = [];
    Object.keys(obj).forEach((key) => {
        obj[key].map((item) => errors.push(item));
    });
    return errors;
};
export const messageSetter = (status, message) => {
    return {
        type: status === "done" ? "success" : status,
        text: message,
    };
};
export const formDataBuilder = (obj) => {
    let formData = new FormData();
    Object.keys(obj).forEach((key) => {
        formData.append(key, obj[key]);
    });
    return formData;
};

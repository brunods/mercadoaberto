// Email
export const formatMail = (value) => {
    const formattedValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
    return formattedValue;
};
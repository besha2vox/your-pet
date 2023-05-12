const fields = {
    name: {
        type: "text",
        name: "name",
        required: true,
        label: "Name:",
    },
    email: {
        type: "email",
        name: "email",
        required: true,
        label: "Email:",
    },
    birthday: {
        type: "date",
        name: "birthday:",
        required: true,
        label: "Birthday:",
        placeholder: "00.00.0000",
    },
    phone: {
        type: "phone:",
        name: "phone",
        required: true,
        label: "Phone:",
        placeholder: "+38000000000",
    },
    city: {
        type: "text",
        name: "city",
        required: true,
        label: "City:",
        placeholder: "Kyiv",
    },
};

export default fields;
const makeMessage = (error) => {
    const messageTable = {
        name: "Invalid data type or format of 'name' field",
        email: "Invalid data type or format of 'email' field",
        phone: "Invalid data type or format of 'phone' field",
        favorite: "Invalid data type or format of 'favorite' field",
    };

    for (const keyword in messageTable) {
        if (error?.message.includes(keyword)) {
            return { message: messageTable[keyword] };
        }
    }

    return { message: error?.message };
};

module.exports = { makeMessage };

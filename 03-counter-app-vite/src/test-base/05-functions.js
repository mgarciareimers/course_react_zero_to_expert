// Functions.
const getUser = () => ({
    'uid': '1234mnE32',
    'name': 'Mike',
    'surname': 'García'
});

const getActiveUser = (name) => ({
    'uid': '1234mnE32',
    'name': name,
});

export {
    getUser,
    getActiveUser,
}
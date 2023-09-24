import { ADD_CONTACT, DELETE_CONTACT, SORT_CONTACTS } from './contactsActions';


const initialState = {
    contacts: [
        {
            "name": "Иван",
            "lastname": "Иванов",
            "phone": "+7 123-456-7890"
        },
        {
            "name": "Екатерина",
            "lastname": "Смирнова",
            "phone": "+7 987-654-3210"
        },
        {
            "name": "Алексей",
            "lastname": "Петров",
            "phone": "+7 555-555-5555"
        }
    ],
    sortBy: 'name',
    searchContact: [],
    searchWord: ''
};

const getContactsBySort = (contacts, sort) => {
    return contacts.sort((a, b) => a?.[sort].localeCompare(b[sort]));
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact !== action.payload),
            };
        case SORT_CONTACTS:
            return {
                ...state,
                contacts: getContactsBySort(state.contacts, action.payload),
                sortBy: action.payload,
            };
        case 'SEARCH_CONTACTS':
            return {
                ...state,
                searchContact: state.contacts.filter(({name}) => name.toLowerCase().includes(action.payload.toLowerCase())),
                searchWord: action.payload
            };
        default:
            return state;
    }
};

export default contactsReducer;
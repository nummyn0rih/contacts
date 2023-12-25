import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__';
import { FIND_CONTACTS_ACTION, ProjectActions } from './actions';
import { ContactDto } from 'src/types/dto/ContactDto';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

const initialContacts: ContactDto[] = [...DATA_CONTACT];
const initialGroupContacts: GroupContactsDto[] = [...DATA_GROUP_CONTACT];

export function contactsReducer(state = initialContacts, action: ProjectActions) {
  switch (action.type) {
    case FIND_CONTACTS_ACTION:
      let findContacts = [...initialContacts];

      if (action.payload.fv.name) {
        const fvName = action.payload.fv.name.toLowerCase();
        findContacts = findContacts.filter(({name}) => (
          name.toLowerCase().indexOf(fvName) > -1
        ))
      }

      if (action.payload.fv.groupId) {
        const groupContacts = [...initialGroupContacts].find(({id}) => id === action.payload.fv.groupId);

        if (groupContacts) {
          findContacts = findContacts.filter(({id}) => (
            groupContacts.contactIds.includes(id)
          ))
        }
      }

      return findContacts;

    default:
      break;
  }

  return state;
}

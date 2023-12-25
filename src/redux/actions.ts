import { FilterFormValues } from "src/components/FilterForm";

export const FIND_CONTACTS_ACTION = 'FIND_CONTACTS_ACTION';

interface FindContactsAction {
    type: typeof FIND_CONTACTS_ACTION;
    payload: {
        fv: Partial<FilterFormValues>
    }
}

export function findContactsActionCreator(fv: Partial<FilterFormValues>): FindContactsAction {
    return { type: FIND_CONTACTS_ACTION, payload: { fv } }
}

export type ProjectActions =
    | FindContactsAction
    // | DecreaseQuantityAction
    // | CreateOrderAction
    // | CreateOrderSuccessAction
    // | ResetOrderAction;
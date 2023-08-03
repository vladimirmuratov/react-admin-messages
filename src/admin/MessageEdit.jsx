import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const MessageEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <DateInput source="createdAt" disabled />
            <TextInput source="message" />
            <TextInput source="authorEmail" disabled/>
            <TextInput source="to" disabled/>
        </SimpleForm>
    </Edit>
);

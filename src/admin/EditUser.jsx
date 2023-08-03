import { Edit, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" disabled/>
            <TextInput source="email" disabled/>
            <TextInput source="image" disabled/>
        </SimpleForm>
    </Edit>
)

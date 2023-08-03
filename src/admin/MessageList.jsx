import { Datagrid, DateField, List, TextField } from 'react-admin';

export const MessageList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="createdAt" showTime/>
            <TextField source="message" />
            <TextField source="authorEmail" />
            <TextField source="to" />
        </Datagrid>
    </List>
);

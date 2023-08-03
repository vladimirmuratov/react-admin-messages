import { Datagrid, EmailField, List, TextField, ImageField  } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ImageField  source="image" sx={{ '& img': { maxWidth: 50, maxHeight: 50, objectFit: 'contain' } }}/>
            <TextField source="name" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);

import * as React from 'react'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
import { dataProvider } from 'ra-data-simple-prisma'
import {UserList} from '@/admin/UserList'
import {MessageList} from '@/admin/MessageList'
import UserIcon from '@mui/icons-material/People'
import ForumIcon from '@mui/icons-material/Forum'
import {MessageEdit} from '@/admin/MessageEdit'
import {Dashboard} from '@/admin/Dashboard'
import {authProvider} from '@/admin/authProvider'
import {MyLayout} from '@/admin/MyLayout'
import {UserEdit} from '@/admin/EditUser'
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

const App = () => (
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider("/api")}
        dashboard={Dashboard}
        layout={MyLayout}
        darkTheme={{ palette: { mode: 'dark' } }}
        i18nProvider={i18nProvider}
    >
        <Resource name="users" list={UserList} edit={UserEdit} recordRepresentation="name" icon={UserIcon}  />
        <Resource name="messages" list={MessageList} edit={MessageEdit} icon={ForumIcon}/>
        {/*<Resource name="posts" list={ListGuesser} edit={EditGuesser} recordRepresentation="title" />*/}
    </Admin>
);

export default App;

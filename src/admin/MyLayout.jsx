import {MyAppBar} from '@/admin/MyAppBar'
import { Layout } from 'react-admin'

export const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />

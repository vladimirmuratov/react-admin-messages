import dynamic from 'next/dynamic'

const App = dynamic(() => import('@/admin/App'), {ssr: false})

export default function Home() {
    return <App/>
}

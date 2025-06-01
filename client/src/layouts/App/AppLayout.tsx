import { ReactNode } from 'react'
import { IconHome } from '@tabler/icons-react'

import logo from '@/assets/react.svg'
import background from '@/assets/bg_graph.jpg'

import { HorizontalHeader } from '@/layouts/headers'
import { Link } from '@/layouts/helpers'

const APP_LINKS: Link[] = [
    { text: 'Home', link: '/', icon: IconHome },
]
const FOOTERLINKS: Link[] = [
    { text: 'Home', link: '/' },
]

const AppLayout = ({children, mainClass}: {children: ReactNode; mainClass?: string}) => (
    <div style={{ backgroundImage: `url(${background})`}}>
        {/* Header */}
        <HorizontalHeader
            logo={logo}
            links={APP_LINKS}
        />
        {/* Main Child */}
        <main
            className={`flex flex-col items-center flex-1 w-full h-screen max-w-5xl justify-self-center ${mainClass}`}
        >
            {/* <ErrorBoundary componentName='Column Layout - Main'> */}
                {children}
            {/* </ErrorBoundary> */}
        </main>
        {/* Footer */}
        {/* <AppFooter primaryLinks={props?.footerLinks} /> */}
    </div>
)


export default AppLayout
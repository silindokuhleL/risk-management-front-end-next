'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'

const AppLayout = ({ children }) => {
    const { user, role , permissions} = useAuth({ middleware: 'auth' })

    // console.log(role )
    if (!user) {
        return <Loading />
    }

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            {/* Sidebar */}
            <Navigation  permissions={permissions}/>

            {/* Main Content */}
            <div className="flex flex-col flex-1 w-full">



                    <header className="bg-white border-b border-gray-200">{user?.name  }</header>
                <h3>{role}</h3>

                {/* Main Content Area */}
                <main className="h-full overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AppLayout

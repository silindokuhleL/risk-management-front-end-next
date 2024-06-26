    import Link from 'next/link'
    import { usePathname } from 'next/navigation'
    import ApplicationLogo from '@/components/ApplicationLogo'
    import NavLink from '@/components/NavLink'
    import { ResponsiveNavButton } from '@/components/ResponsiveNavLink'
    import { useAuth } from '@/hooks/auth'

    const Navigation = ({ permissions }) => {
        const { logout } = useAuth()

        return (
            <nav className="bg-white h-screen flex flex-col w-64">
                {/* Logo */}
                <div className="flex items-center justify-center h-16">
                    <Link href="/dashboard">
                        <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600 cursor-pointer" />
                    </Link>
                </div>

                {/* Main Navigation Links */}
                <div className="overflow-y-auto flex-grow">
                    <div className="px-4 py-2 space-y-2">
                        {permissions.includes('view dashboard') && (
                            <div>
                                <NavLink
                                    href="/dashboard"
                                    active={usePathname() === '/dashboard'}
                                >
                                    Dashboard
                                </NavLink>
                            </div>
                        )}
                        {permissions.includes('view risks') && (
                            <div>
                                <NavLink
                                    href="/risks"
                                    active={usePathname().startsWith('/risks')}
                                >
                                    Risk Register
                                </NavLink>
                            </div>
                        )}
                        {permissions.includes('view controls') && (
                            <div>
                                <NavLink
                                    href="/controls"
                                    active={usePathname() === '/controls'}
                                >
                                    Controls
                                </NavLink>
                            </div>
                        )}
                        {permissions.includes('view action plans') && (
                            <div>
                                <NavLink
                                    href="/action_plans"
                                    active={usePathname() === '/action_plans'}
                                >
                                    Action Plans
                                </NavLink>
                            </div>
                        )}
                        {permissions.includes('view settings') && (
                            <div>
                                <NavLink
                                    href="/rating/settings"
                                    active={usePathname().startsWith('/rating')}
                                >
                                    Settings
                                </NavLink>
                            </div>
                        )}
                        {permissions.includes('manage users') && (
                            <div>
                                <NavLink
                                    href="/users"
                                    active={usePathname().startsWith('/users')}
                                >
                                    Users
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>

                {/* Responsive Menu - shown on small screens */}
                <div className="flex-shrink-0">
                    <div className="px-4 py-2 border-t border-gray-700">
                        <ResponsiveNavButton onClick={logout}>
                            Logout
                        </ResponsiveNavButton>
                    </div>
                </div>
            </nav>
        )
    }

    export default Navigation

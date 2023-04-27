import { useCookies } from 'react-cookie'
import { Outlet, Navigate } from 'react-router-dom'

function Authentication() {
	const [cookies] = useCookies('token')
	if (cookies.token) {
		return <Outlet />
	}
	console.log(cookies.access_token);
	return <Navigate to={'/'} replace />
}

export default Authentication
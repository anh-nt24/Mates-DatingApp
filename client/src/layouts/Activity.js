import { useCookies } from 'react-cookie';
import NavBar from '../components/NavBar';

const ActivityLayout = ({children}) => {
    const [cookie] = useCookies()
    return (
        <>
            <NavBar authToken={cookie.token}/>
            <div>
                {children}
            </div>
        </>
    );
}

export default ActivityLayout;
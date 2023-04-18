import NavBar from '../../components/NavBar';

const ActivityLayout = ({children}) => {
    return (
        <>
            <NavBar authToken={true}/>
            <div>
                {children}
            </div>
        </>
    );
}

export default ActivityLayout;
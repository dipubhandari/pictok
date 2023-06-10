import './home.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import ProfileDetails from '../components/Profile-details/ProfileDetails';

function Profile(props) {

    return (
        <>
            <main className='homeContainer_homepage'>
                {/* header */}
                <section className='header'>
                    <Header />
                </section>
                {/* header ends here */}
                {/* main content */}
                <section className='main_content'>
                    {/*  */}
                    <section className='left_content'>
                        <Sidebar />
                    </section>
                    <section className='content'>
                        {/* profile details here */}
                        <ProfileDetails />
                    </section>
                </section>
                {/* content ends here */}

            </main>
        </>

    );
}

export default Profile;
import Navbar from "../components/Navbar";

function Profile() {

    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");

    return (

        <>

        <Navbar/>

        <div className="container mt-5">

           <div className="card profile-card p-4">

                <h2>My Profile</h2>

                <hr/>

                <p><strong>Name :</strong> {name}</p>

                <p><strong>Email :</strong> {email}</p>

                <p><strong>Role :</strong> {role}</p>

            </div>

        </div>

        </>

    );

}

export default Profile;
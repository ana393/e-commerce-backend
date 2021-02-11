import React from 'react';
import { useHistory } from 'react-router-dom';
import { Input, notification } from 'antd';
import { useSelector } from 'react-redux';
import { updateProfile } from '../../../redux/actions/userAction';
import './UpdateProfile.scss';
const UpdateProfile = () => {

    const user = useSelector(state => state.user.user);
    const history = useHistory();
    const id = user.isUser._id;
    const SubmitUpdate = (event) => {
        event.preventDefault();
        try {
            const body = {
                name: event.target.name.value,
                surname: event.target.surname.value,
                email: event.target.email.value,
            }
            updateProfile(id, body);
            history.push("/");
        } catch (error) {
            console.log(error);
            notification.error({ message: 'Error', description: 'Profile update failed, please try again!' })
        }

    }
    return (
        <div className="updateContainer">
            <div className="updateBox">
                <div className="updateRegister"><h2>Welcome to your profile</h2> <em>"There is nothing permanent except change"</em></div>
                <form className="updateForm" onSubmit={SubmitUpdate}>
                    <Input type="name" name="name" defaultValue={user.isUser.name} />
                    <Input type="surname" name="surname" defaultValue={user.isUser.surname} />
                    <Input type="email" name="email" defaultValue={user.isUser.email} />
                    <button className="profUpdate" type="submit">Update your profile</button>
                </form>
            </div>

        </div>

    );
}
/*const mapStateToProps = (state) => ({ user: state.user.user });
const mapDispatchToProps = dispatch => ({ update: (id, body) => updateProfile(dispatch, id, body) });
const connectedUpdateProfile = connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);*/
export default UpdateProfile;
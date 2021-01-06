import React from 'react';
import { Input } from 'antd';
import { useSelector } from 'react-redux';
//import { updateProfile } from '../../../redux/actions/userAction';
import './UpdateProfile.scss';
const UpdateProfile = () => {
    const user = useSelector(state => state.user.user);

    return (
        <div className="updateContainer">
            <div className="updateBox">
                <div className="updateRegister"><h2>Welcome to your profile</h2> <em>"There is nothing permanent except change"</em></div>
                <form className="updateForm" onSubmit="">
                    <Input type="name" name="name" defaultValue={user.isUser.name} />
                    <Input type="surname" name="surname" defaultValue={user.isUser.surname} />
                    <Input type="email" name="email" defaultValue={user.isUser.email} />
                    <button className="profUpdate" type="submit">Update your profile</button>
                </form>
            </div>

        </div>

    );
}
export default UpdateProfile;
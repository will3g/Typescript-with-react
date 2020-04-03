import React from "react";

interface IUser {
    username: string;
    email?: string;
}

interface Props {
    user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
    return (
        <div className="block">
            <strong>Username: </strong> <p>{ user.username }</p>
            <strong>E-mail: </strong> <p>{ user.email || 'Não possuí email' }</p>
        </div>
    );
};

export default User;
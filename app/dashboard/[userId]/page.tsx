const UserProfile = ({ params }: { params: { userId: string } }) => {
    return <h2>This is the user profile page of id {params.userId}</h2>;
};

export default UserProfile;

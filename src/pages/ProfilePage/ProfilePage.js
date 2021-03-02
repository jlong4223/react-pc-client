const ProfilePage = (props) => {
  return (
    <div className="page">
      <div>
        <h1 style={{ marginTop: 100 }}>Hi {props.user.user}</h1>
        <img src={props.user.pic} alt="pic" style={{ width: 300 }}></img>
      </div>
    </div>
  );
};

export default ProfilePage;

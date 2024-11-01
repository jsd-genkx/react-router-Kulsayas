import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <nav>
        <ul class="ul-Profile">
          <li>
            <Link to="info">Profile Info</Link>
          </li>
          <li>
            <Link to="orders">Orders</Link>
          </li>
          <li>
            <Link to="setting">Setting</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* This is renders the nested routes */}
    </div>
  );
}
export default Profile;

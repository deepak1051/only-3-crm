// import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
// import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState, useEffect, useCallback } from 'react';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LeftSidebar from '../../components/sidebar/LeftSidebar';

const EditCustomer = () => {
  const { customerId } = useParams()
  const { token } = useSelector(state => state.auth)
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',

    status: 'Pending',
    phone: '',
    country: 'India',
    address: '',
  });

  const countryOptions = [

    {
      label: 'India',
      value: 'India',
    },
    {
      label: 'USA',
      value: 'USA',
    },
    {
      label: 'UK',
      value: 'UK',
    },
    {
      label: 'Dubai',
      value: 'Dubai',
    },
    {
      label: 'Germany',
      value: 'Germany',
    },
  ];

  const roleOptions = [

    { value: 'Pending' },
    { value: 'Success' },
    { value: 'Rejected' },
  ];




  const loadUserData = useCallback(() => {
    axios
      .get(`https://crm-ywh9.onrender.com/customer/${customerId}`, {

      })
      .then(({ data }) => {
        console.log(data);
        setUser(data);
      })
      .catch((err) => alert(err.message));
  }, [customerId]);

  useEffect(() => {
    loadUserData();
  }, [loadUserData]);



  const handleChange = (e) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .put(`https://crm-ywh9.onrender.com/customer/${customerId}`, { ...user }, {
        headers: {
          'authorization': `Bearer ${token}`
        }
      })
      .then((res) => navigate(`/customers/${customerId}`))
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message.errors);
        setError(err.message);
      });
  };
  console.log(user);
  return (
    <div className="new">
      <LeftSidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Customer</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Name and surname</label>
                <input
                  type="text"
                  placeholder="john doe"
                  name="name"
                  onChange={handleChange}
                  required
                  value={user.name}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  name="email"
                  onChange={handleChange}
                  required
                  value={user.email}
                />
              </div>

              <div className="formInput">
                <label>Country</label>
                <select
                  id="favColor"
                  value={user.country}
                  onChange={handleChange}
                  name="country"
                  required
                >
                  {countryOptions.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="formInput">
                <label>Address</label>
                <input
                  required
                  type="text"
                  placeholder="Elton st. 216 NewYork"
                  name="address"
                  onChange={handleChange}
                  value={user.address}
                />
              </div>
              <div className="formInput">
                <label>Phone No.</label>
                <input
                  required
                  type="text"
                  placeholder="9784823451"
                  name="phone"
                  onChange={handleChange}
                  value={user.phone}
                />
              </div>

              {/* <div className="formInput">
                <label>Status</label>
                <input
                  required
                  type="text"
                  placeholder="Pending..."
                  name="role"
                  onChange={handleChange}
                  value={user.role}
                />
              </div> */}

              <div className="formInput">
                <label htmlFor="role">Status</label>
                <select
                  id="role"
                  value={user.role}
                  onChange={handleChange}
                  name="status"
                  required
                >
                  {roleOptions.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>

              {/* <div className="formInput">
                <label>Light Yagami</label>
                <input
                  required
                  type="text"
                  placeholder="Light Yagami"
                  // name="status"
                  // onChange={handleChange}
                  // value={user.status}
                />
              </div> */}

              <br />
              <button>Save</button>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCustomer

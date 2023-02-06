import { NavLink, Link } from 'react-router-dom'

const LeftSidebar = () => {
  return (
    <div>
      <section id="sidebar">
        <Link to="/" class="brand">
          <i class='bx bxs-smile'></i>
          <span class="text">AdminHub</span>
        </Link>
        <ul class="side-menu top">
          <li >
            <NavLink to="/dashboard" activeClassName="active" className={(state => console.log(state))}>
              <i class='bx bxs-dashboard' ></i>
              <span class="text">Dashboard</span>

            </NavLink>
          </li>
          <li>
            <NavLink to="/employees" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
              <i class='bx bxs-shopping-bag-alt' ></i>
              <span class="text">Employees</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              <i class='bx bxs-doughnut-chart' ></i>
              <span class="text">Customers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <i class='bx bxs-message-dots' ></i>
              <span class="text">Projects</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/">
              <i class='bx bxs-group' ></i>
              <span class="text">Team</span>
            </NavLink>
          </li> */}
        </ul>
        <ul class="side-menu">
          <li className='active'>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              <i class='bx bxs-cog' ></i>
              <span class="text">Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" class="logout" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              <i class='bx bxs-log-out-circle' ></i>
              <span class="text">Logout</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default LeftSidebar
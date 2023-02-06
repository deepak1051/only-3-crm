import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import './new-sidebar.css'
import { useSelector } from 'react-redux'
import Skeleton from '../../utils/Skeleton'
const NewSidebar = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [customerList, setCustomrList] = useState([])
  const [task, setTasks] = useState([])
  const { token } = useSelector(state => state.auth)

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get('https://crm-ywh9.onrender.com/customer', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      // console.log(data);
      if (data) {
        setCustomrList(data)
        setIsLoading(false)
      }
      // console.log('Data is :', data)
    } catch (err) {
      console.log('error is in the house ', err)
      setIsLoading(false)
    }


  }, [token])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get(
          `https://crm-ywh9.onrender.com/employee/1/getTask`, {
          headers: {
            'authorization': `Bearer ${token}`
          }
        }
        );
        // console.log(data);
        // const usersTasks = data.filter(
        //   (t) => t.comming[0].employeeId === employeeId
        // );
        setTasks(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTasks();
  }, [token]);

  return (
    <section id="content">
      {/* {isLoading && <Skeleton />} */}
      <nav>
        <i class='bx bx-menu' ></i>
        <a href="#" class="nav-link">Categories</a>
        <form action="#">
          <div class="form-input">
            <input type="search" placeholder="Search..." />
            <button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
          </div>
        </form>
        <input type="checkbox" id="switch-mode" hidden />
        <label for="switch-mode" class="switch-mode"></label>
        <a href="#" class="notification">
          <i class='bx bxs-bell' ></i>
          <span class="num">8</span>
        </a>
        <a href="#" class="profile">
          <img src={`https://picsum.photos/seed/${3}/300/200`} />
        </a>
      </nav>

      <main>
        <div class="head-title">
          <div class="left">
            <h1>Dashboard</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li><i class='bx bx-chevron-right' ></i></li>
              <li>
                <a class="active" href="#">Home</a>
              </li>
            </ul>
          </div>
          <a href="#" class="btn-download">
            <i class='bx bxs-cloud-download' ></i>
            <span class="text">Download PDF</span>
          </a>
        </div>

        <ul class="box-info">
          <li>
            <i class='bx bxs-calendar-check' ></i>
            <span class="text">
              <h3>1020</h3>
              <p>Active Customers</p>
            </span>
          </li>
          <li>
            <i class='bx bxs-group' ></i>
            <span class="text">
              <h3>2834</h3>
              <p>Total Employees</p>
            </span>
          </li>
          <li>
            <i class='bx bxs-dollar-circle' ></i>
            <span class="text">
              <h3>$2543</h3>
              <p>Total Sales</p>
            </span>
          </li>
        </ul>


        <div class="table-data">
          <div class="order">
            <div class="head">
              <h3>Recent Customers</h3>
              <i class='bx bx-search' ></i>
              <i class='bx bx-filter' ></i>
            </div>
            <table id="body">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Country</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody >

                {/* {!isLoading ?
                  customerList.map(customer => {
                    // console.log(customer)
                    return <tr>
                      <td>
                        <img src={`https://picsum.photos/seed/${customer._id}/300/200`} alt="" />
                        <p>{customer.name}</p>
                      </td>
                      <td>{customer.country}</td>
                      <td><span class="status completed">{customer.status}</span></td>
                    </tr>
                  })
                  : <Skeleton />
                } */}

                {
                  customerList.map(customer => {
                    // console.log(customer)
                    return <tr>
                      <td>
                        <img src={`https://picsum.photos/seed/${customer._id}/300/200`} alt="" />
                        <p>{customer.name}</p>
                      </td>
                      <td>{customer.country}</td>
                      <td><span class="status completed">{customer.status}</span></td>
                    </tr>
                  })
                }




              </tbody>
            </table>
          </div>
          <div class="todo">
            <div class="head">
              <h3>Running Projects</h3>
              <i class='bx bx-plus' ></i>
              <i class='bx bx-filter' ></i>
            </div>
            <ul class="todo-list">
              {/* {!isLoading ?
                task.map(item => {
                  return <li class="completed">
                    <p>{item.comming[0].title}</p>
                    <i class='bx bx-dots-vertical-rounded' ></i>
                  </li>
                })
                : <Skeleton />
              } */}


            </ul>
          </div>
        </div>
      </main>

    </section>
  )
}

export default NewSidebar
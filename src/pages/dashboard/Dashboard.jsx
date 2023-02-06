import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './dashboard.scss';
import Widget from '../../extra/widget/Widget';
import Feature from '../../extra/feature/Feature';
import LeftSidebar from '../../components/sidebar/LeftSidebar';
import NewSidebar from '../../components/sidebar/NewSidebar';

const Dashboard = () => {
  return (
    <div className="home">
      <LeftSidebar />
      {/* <Sidebar /> */}
      <div className="homeContainer">
        <NewSidebar />
        {/* <Navbar /> */}
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div> */}
        {/* <div className="charts">
          <Feature />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;

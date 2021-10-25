import classes from './Dashboard.module.css';
import DashboardHeader from '../../component/DashboardHeader/DashboardHeader';
import ApiDashboard from '../../component/ApiDashboard/ApiDashboard';
import Pagination from '../../component/Pagination/Pagination';

function Dashboard() {
  return (
    <div className={classes.Box}>
      <DashboardHeader />
      <Pagination />
      <ApiDashboard />
    </div>
  );
}

export default Dashboard;

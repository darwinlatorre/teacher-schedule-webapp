import HomePage from "../features/coordinator/home.jsx";
import EnviromentHomePage from "../features/coordinator/enviromentManagment/enviromentHome.jsx";
import PeriodHomePage from "../features/coordinator/periodManagment/periodHome.jsx";
import ScheduleHomePage from "../features/coordinator/scheduleManagment/scheduleHome.jsx";
import TeacherHomePage from "../features/coordinator/teacherManagment/teacherHome.jsx";

/**
 * rutas privadas del coordinador
 */
export const coordinatorRoutes = [
  {
    path: "/coordinator/home",
    element: <HomePage />,
  },
  {
    path: "/coordinator/enviroment/home",
    element: <EnviromentHomePage />,
  },
  {
    path: "/coordinator/period/home",
    element: <PeriodHomePage />,
  },
  {
    path: "/coordinator/schedule/home",
    element: <ScheduleHomePage />,
  },
  {
    path: "/coordinator/teacher/home",
    element: <TeacherHomePage />,
  },
];

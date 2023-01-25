import HomePage from "../features/coordinator/home.js";
import EnviromentHomePage from "../features/coordinator/enviromentManagment/enviromentHome.js"
import PeriodHomePage from "../features/coordinator/periodManagment/periodHome.js"
import ScheduleHomePage from "../features/coordinator/scheduleManagment/scheduleHome.js"
import TeacherHomePage from "../features/coordinator/teacherManagment/teacherHome.js"

/**
 * rutas privadas del coordinador
 */
export const coordinator = [
  {
    path: '/coordinator/home',
    element: <HomePage />
  },
  {
    path: '/coordinator/enviroment/home',
    element: <EnviromentHomePage />
  },
  {
    path: '/coordinator/period/home',
    element: <PeriodHomePage />
  },
  {
    path: '/coordinator/schedule/home',
    element: <ScheduleHomePage />
  },
  {
    path: '/coordinator/teacher/home',
    element: <TeacherHomePage />
  }
]
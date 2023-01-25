import { teacherRoutes, incompleteTeacherRoutes } from './teacher'
import { incompleteCoordinatorRoutes, coordinatorRoutes } from './coordinator'
import { publicRoutes } from './public'
import { useRoutes } from 'react-router'
import { useSelector } from 'react-redux'

/**
 * contiene el arbol de rutas y controla las redirecciones dependiendo del rol
 * element es lo mismo que esto
 * <Routes>
    <Route path='/' element={null} />
  </Routes>
  *
 */
export default function Routes() {
  /**
   * Extraigo el role del estado global auth -> session -> role
   */
  const role = useSelector(({ auth }) => auth.session.role)

  /**
   * Roles permitidos dentro de la app
   * Dependiendo del rol del usuario react-router redireccionara hacia
   * el arbol de rutas que tiene permitido
   */
  const routesByRole = {
    // 'teacher-g': null, Nuevo role mujeres gestantes
    'incomplete-coordinator': incompleteCoordinatorRoutes,
    'incomplete-teacher': incompleteTeacherRoutes,
    coordinator: coordinatorRoutes,
    default: publicRoutes,
    teacher: teacherRoutes
  }

  const routes = routesByRole[role]
  const element = useRoutes(routes)
  return element
}

import { teacherRoutes } from "./teacher";
import { coordinatorRoutes } from "./coordinator";
import { publicRoutes } from "./public";
import { useRoutes } from "react-router-dom";

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
   * Extraigo el role del estado de la sesión
   */

  var sesion = {
    user: "",
    role: "coordinator",
  };

  var role = sesion.role;

  /**
   * Roles permitidos dentro de la app
   * Dependiendo del rol del usuario react-router redireccionara hacia
   * el arbol de rutas que tiene permitido
   */
  const routesByRole = {
    coordinator: coordinatorRoutes,
    default: publicRoutes,
    teacher: teacherRoutes,
  };

  const routes = routesByRole[role];
  const element = useRoutes(routes);
  return element;
}

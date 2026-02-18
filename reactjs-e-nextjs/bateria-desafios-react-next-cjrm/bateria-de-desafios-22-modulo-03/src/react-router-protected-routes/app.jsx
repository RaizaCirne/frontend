import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

const fakeAuthProvider = {
  isAuthenticated: false,
  username: null,
  async signin(username) {
    await new Promise(r => setTimeout(r, 500))
    this.isAuthenticated = true
    this.username = username
  },
  async signout() {
    await new Promise(r => setTimeout(r, 500))
    this.isAuthenticated = false
    this.username = ''
  }
}

const Layout = () =>
  <>
    <p>Status do usuário aqui</p>
    <ul>
      <li><Link to="/">Página Pública</Link></li>
      <li><Link to="/protected">Página Protegida</Link></li>
    </ul>
    {/* componentes filhos aqui */}
  </>

const Login = () => null

const Public = () =>
  <>
    <h3>Título Público</h3>
    <p>Conteúdo público aqui</p>
  </>

const Protected = () =>
  <>
    <h3>Título Protegido</h3>
    <p>Conteúdo Protegido</p>
  </>

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Public />} />
      <Route path="login" element={<Login />} />
      <Route path="protected" element={<Protected />} />
      <Route path="logout" />
    </Route>
  )
)

const App = () => <RouterProvider router={router} />

export { App }

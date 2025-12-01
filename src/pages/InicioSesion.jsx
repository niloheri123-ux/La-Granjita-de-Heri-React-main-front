import { useNavigate } from 'react-router-dom';
import LoginForm from "../components/molecules/LoginForm";


export default function InicioSesion() {
    return (
    <div className="login-page-body login-page-background">
      <LoginForm />
    </div>
  );
}

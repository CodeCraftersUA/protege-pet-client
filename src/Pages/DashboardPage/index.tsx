import Dashboard from "../../components/Dashboard/Dashboard";
import { AuthProvider } from "../../contexts/Auth/AuthProvider.jsx";

const DashboardPage = () => {
    return (
        <>
            <AuthProvider>
                <Dashboard />
            </AuthProvider>
        </>
    )
}

export default DashboardPage;
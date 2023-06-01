
import OverviewImg from "../assets/img/pages/overview.jpg";
import TransactionsImg from "../assets/img/pages/transactions.jpg";
import SettingsImg from "../assets/img/pages/settings.jpg";
import SignInImg from "../assets/img/pages/sign-in.jpg";
import SignUpImg from "../assets/img/pages/sign-up.jpg";
import LockImg from "../assets/img/pages/lock.jpg";
import ForgotPasswordImg from "../assets/img/pages/forgot-password.jpg";
import ResetPasswordImg from "../assets/img/pages/reset-password.jpg";
import NotFoundImg from "../assets/img/pages/404.jpg";
import ServerErrorImg from "../assets/img/pages/500.jpg";

import { routes } from "../routes";


const pages = [
    {
        "id": 1,
        "name": "Overview",
        "image": OverviewImg,
        "link": routes.DashboardOverview.path
    },
    {
        "id": 2,
        "name": "Transactions",
        "image": TransactionsImg,
        "link": routes.Transactions.path
    },
    {
        "id": 3,
        "name": "Settings",
        "image": SettingsImg,
        "link": routes.Settings.path
    },
    {
        "id": 4,
        "name": "Sign In",
        "image": SignInImg,
        "link": routes.Signin
    },
    {
        "id": 5,
        "name": "Sign Up",
        "image": SignUpImg,
        "link": routes.Signup.path
    },
    {
        "id": 6,
        "name": "Lock",
        "image": LockImg,
        "link": routes.Lock.path
    },
    {
        "id": 7,
        "name": "Forgot password",
        "image": ForgotPasswordImg,
        "link": routes.ForgotPassword.path
    },
    {
        "id": 8,
        "name": "Reset password",
        "image": ResetPasswordImg,
        "link": routes.ResetPassword.path
    },
    {
        "id": 9,
        "name": "404",
        "image": NotFoundImg,
        "link": routes.NotFound.path
    },
    {
        "id": 10,
        "name": "500",
        "image": ServerErrorImg,
        "link": routes.ServerError.path
    }
];
export default pages;
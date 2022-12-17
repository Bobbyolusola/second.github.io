import NoPerm from "../Pages/NoPermission/NoPermission";
import FORM from "../Pages/FORM/FORM";

export const AppRoutes = {
    home: "/",
    bobby: "/bobby",
    ihor: "/ihor",
    friends: "/friends",
    custom: "/:userId",   // : means userid will apply as a variable, and can be anything written on the url
    notFound: "/404",
    NoPerm: "/Denied",
    HOC: "/hoc",
    FORM: "/form",
    Form2: "/form2",
    clickInc: "/clickInc",
    hoverInc: "/hoverInc",
}

export const NestedRoutes = {
    bobby: "/bobby/*",
    ihor: "/ihor/*",
}
import NoPerm from "../Pages/NoPermission/NoPermission";

export const AppRoutes = {
    home: "/",
    bobby: "/bobby",
    ihor: "/ihor",
    friends: "/friends",
    custom: "/:userId",   // : means userid will apply as a variable, and can be anything written on the url
    notFound: "/404",
    NoPerm: "/Denied"
}

export const NestedRoutes = {
    bobby: "/bobby/*",
    ihor: "/ihor/*",
}
import AboutCandidateDetail from "../components/about/AboutCandidateDetail";
import AboutWe from "../components/about/AboutWe";
import HomePage from "../components/home/index";
import ProfileCandidate from "../components/Profile/index";
const publicRouter = [
  { path: "/", component: HomePage },
  { path: "/about/profile-candidate-detail", component: AboutCandidateDetail },
  { path: "/profile-candidate", component: ProfileCandidate },
  {path:"/about/we",component: AboutWe}
];

export default publicRouter;

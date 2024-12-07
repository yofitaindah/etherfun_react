import HomeTwo from "./HomeTwo";
import Token from "./Token";
import ConnectWallet from "./ConnectWallet";
import TeamDetails from "./TeamDetails";

import Roadmap from "./Roadmap";
import Contact from "./Contact";
import PageFaqs from "./PageFaqs";


const routes = [
  
  { path: '/', component: <HomeTwo />},
  // { path: '/home_v2', component: <HomeTwo />},
  // { path: '/home_v3', component: <HomeThree />},
  // { path: '/project_v1', component: <Project1 />},
  // { path: '/project_v2', component: <Project2 />},
  // { path: '/project_v3', component: <Project3 />},
  // { path: '/project_v4', component: <Project4 />},
  // { path: '/project_v5', component: <Project5 />},
  // { path: '/project_list', component: <ProjectList />},
  // { path: '/project_details', component: <ProjectDetails />},
  // { path: '/project_submit', component: <SubmitProject />},
  { path: '/token', component: <Token />}, //
  { path: '/connect', component: <ConnectWallet />}, //
  { path: '/team_details', component: <TeamDetails />}, //
  // { path: '/submit_igo', component: <SubmitIGO />},
  { path: '/faqs', component: <PageFaqs />},
  // { path: '/login', component: <Login />},
  // { path: '/register', component: <Register />},
  // { path: '/forgetPass', component: <ForgetPass />},
  { path: '/roadmap', component: <Roadmap />},
  // { path: '/blog_grid', component: <BlogGrid />},
  // { path: '/blog_list', component: <BlogList />},
  // { path: '/blog_details', component: <BlogDetails />},
  { path: '/contact', component: <Contact />},



]

export default routes;
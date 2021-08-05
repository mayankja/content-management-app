import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/components/homePage";
import PageForm from "./Pages/components/pageForm";
import PageDetails from "./Pages/components/pageDetails";

const App = () => {
  return (
    <Switch>
      <Route path="/add_new_page" component={PageForm} />
      <Route path="/page_details/:id" component={PageDetails}/>
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default App;

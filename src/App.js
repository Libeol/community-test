import { BrowserRouter,Switch, Route} from 'react-router-dom';
import './App.css';
import Course from './component/course';
import Pay1 from './component/pay1';
import Pay2 from './component/pay2';
import Question from './component/question';
import Reservation from './component/reservation';
import Special1 from './component/special1';
import Top from './component/top';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/community-test">
            <Top />
          </Route>
          <Route path="/community-test/course">
            <Course />
          </Route>

          <Route path="/community-test/question">
            <Question />
          </Route>

          <Route path="/community-test/reservation" render={({match:{url}})=>(
            <Switch>
              <Route exact path={url}>
                <Reservation />
              </Route>
              <Route path={`${url}/special-lesson`}>
                <Special1 />
              </Route>
              <Route path={`${url}/pay1`}>
                <Pay1 />
              </Route>
              <Route path={`${url}/pay2`}>
                <Pay2 />
              </Route>
            </Switch>
          )} />

          <Route path="*">
            <h2>何もない</h2>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
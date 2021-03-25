import Page1 from '../carousel/Page1';
import Page2 from '../carousel/Page2';
import Page3 from '../carousel/Page3';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function CarouselData(){
    return(
        <Router>
            <Switch>
            <Route path = '/fundacje' exact component = {Page1} />
          <Route path = '/organizacje' exact component = {Page2} />
          <Route path = '/lokalne' exact component = {Page3} />
            </Switch>
        </Router>
    )
}
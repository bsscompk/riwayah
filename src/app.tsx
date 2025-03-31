import { Suspense } from 'solid-js';
import { Route, Router } from '@solidjs/router';

import SearchPage from '~/pages/SearchPage';

import '~/stylesheets/tailwind.css';

const App = () => {
    return (
        <Router root={(props) => <Suspense>{props.children}</Suspense>}>
            <Route path="/" component={SearchPage} />
        </Router>
    );
};

export default App;

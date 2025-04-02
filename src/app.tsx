import { Suspense } from 'solid-js';
import { Route, Router } from '@solidjs/router';

import SearchPage from '~/pages/SearchPage';

import Error404Page from '~/pages/errors/Error404Page';

import '~/stylesheets/tailwind.css';

const App = () => {
    return (
        <Router root={(props) => <Suspense>{props.children}</Suspense>}>
            <Route path="/" component={SearchPage} />

            <Route path="*" component={Error404Page} />
        </Router>
    );
};

export default App;

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

/* SIN JSX
const header = React.createElement('header', null, title);
const main = React.createElement('main', null, 'Contenido');
const footer = React.createElement('footer', null, 'Pie de Pagina');
const app = React.createElement('div', { className: 'app' }, [header, main, footer]);

*/

/* Con JSX */
const title = <h1>Titulo</h1>;
const Header = () => <header>{title}</header>;
const main = <main>Contenido</main>;
const footer = <footer>Pie de pagina</footer>;
const app = <main className='app'><Header /> {main} {footer}</main>;

root.render(app);
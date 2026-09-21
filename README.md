# Explore India

Explore India is a React travel discovery website for finding heritage sites, temples, mountain destinations, coastal locations, and wildlife experiences across India.

The project uses a local JSON dataset, so visitors can search destinations without requiring an external API. Selecting a state shows all destinations in that state, while keyword search matches destination names, cities, states, and categories.

## Features

- Hero banner carousel with rotating destination themes
- Search by state, place name, or keyword
- Results page with destination cards and summaries
- Individual destination detail pages
- Best time to visit, highlights, travel tips, and Google Maps links
- State-based destination carousel and category-based exploration
- About page, newsletter section, and protected admin routes
- Responsive layout built with Tailwind CSS

## Technology

- React 19 and React Router
- Tailwind CSS and Create React App
- Testing Library and Jest
- Local data source: [`src/data.json`](src/data.json)

## Project Structure

```text
src/
├── components/           Reusable home and admin components
├── context/              Shared content and state data
├── layouts/              Navbar, footer, banner, map, and about layouts
├── pages/                Home, about, search results, details, and admin pages
├── data.json             Destination content
├── App.js                Application routes
└── index.css             Global styles and Tailwind directives
```

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Application Routes

| Route | Description |
| --- | --- |
| `/` | Home page and destination search |
| `/about` | About Explore India |
| `/explore` | Search results page |
| `/place/:name` | Destination details |
| `/admin/login` | Admin login |
| `/admin/dashboard` | Protected admin dashboard |
| `/admin/places` | Protected place management |

## Data Format

Destinations are stored in `src/data.json`. Each destination includes its name, category, location, summary, historical details, highlights, travel tips, images, and map URL. Add or update entries in the `destinations` array to change the searchable content.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

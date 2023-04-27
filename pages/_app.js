import '../styles/global.css'

// This is a top-level React component that wraps all pages in the application
// can be used to keep state too
// Component prop is the active page 
// pageProps is an object with the initial props that were preloaded by the page, otherwise it's an empty object
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
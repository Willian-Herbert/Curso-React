import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />

            <main>
                <Post title='Meu Primeiro Post' />
                <Post title='Meu Segundo Post' />
            </main>

            <Footer/>
        </>
    );
}

export default App;

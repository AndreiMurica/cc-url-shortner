import "./App.css";
import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";
import { CreateLink } from "./CreateLink";
import { MyUrls } from "./MyUrls";
import { RedirectPage } from "./RedirectPage";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<CreateLink />} />

                    <Route path="/my-urls" element={<MyUrls />} />

                    <Route path="/:shortCode" element={<RedirectPage />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;

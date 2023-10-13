import * as React from "react";
import { Link } from "gatsby"; 
import Layout from "../components/layout";


const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-slate-800 ">404</h1>
        <p className="mt-4 text-2xl text-slate-300">
          Désolé, cette page n'existe pas.
        </p>

        <Link 
          to="/"
          className="px-4 py-2 mt-8 text-lg bg-slate-500 text-slate-200 rounded-lg hover:bg-slate-500"
        >
          Retour à l'accueil
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Page non trouvée</title>;
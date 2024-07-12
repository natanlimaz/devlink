import { Link } from 'react-router-dom';

export function ErrorPage() {


    return (
        <div className="flex w-full min-h-screen items-center justify-center flex-col">
            <h1 className="font-bold text-5xl text-white mb-2">404 - Not Found</h1>
            <p className="font-medium text-white text-xl mb-10">Página não encontrada!</p>
            <Link 
                className=" bg-blue-600 rounded border-0 text-lg font-medium text-white p-2 hover:bg-blue-700 transition-colors duration-300"
                to="/admin"
            >
                Voltar para Admin
            </Link>
        </div>
    );
}
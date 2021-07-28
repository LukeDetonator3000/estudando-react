import { RepositoryItem } from "./RepositoryItem";

const repositoryName = 'unform2';

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                <RepositoryItem repository="form" />
                <RepositoryItem />
                <RepositoryItem repository="form" />
                <RepositoryItem />
                <RepositoryItem repository="form" />
                <RepositoryItem />
            </ul>
        </section>
    );
}
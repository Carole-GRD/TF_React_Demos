import { useForm } from "react-hook-form";


const SearchBar = ( { onSearch } ) => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        onSearch(data.query.toLowerCase());
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="query">Station : </label>
                <input type="text" {...register('query')} />

                <button type="submit">Rechercher</button>
            </form>
        </>
    )
}

export default SearchBar;

import {useState,useEffect, useRef} from 'react';


//API
import API from '../API';


const initialState = {
    page:0,
    results:[],
    total_pages:0,
    total_results:0
};

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    

    const fetchMovies = async(page,searchTerm="")=>{

        try{
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm,page);

           

            setState(oldstate=>({

                ...movies,
                results:
                page>1 ? [...oldstate.results, ...movies.results] : [...movies.results]
                
            }));

        }catch(error)
        {
            setError(true);
        }

    }

    useEffect(() => {
        fetchMovies(1)
    }, [])


    return {state,loading,error};
};
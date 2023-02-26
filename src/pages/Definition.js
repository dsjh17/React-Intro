import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useParams, useNavigate, Link } from "react-router-dom";
import NotFound from '../Components/NotFound';
export default function Definition() {
    const [word, setWord] = useState("");
    const navigate = useNavigate();
    const [notFound, setNotFound] = useState(false);
    let { search } = useParams();
    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((response) => {
                if (response.status === 404) {
                    setNotFound(true);
                }
                return response.json();
            }
            )
            .then((data) => {
                //console.log(data[0]["meanings"]);
                setWord(data[0].meanings);
            }
            );
    }, []);
    if (notFound === true) {
        return (
            <>
                <NotFound />
                <Link to="/dictionary">
                    Search Another Term
                </Link>
            </>
        );
    }
    return (
        <>
            {word ? <>
                <h1>Here is the definition of {search}:</h1>
                {word.map((meaning) => {
                    return (
                        <p key={uuidv4()}>
                            {meaning.partOfSpeech + ": "}
                            {meaning["definitions"][0]["definition"]}
                        </p>

                    );
                }
                )}
            </>
                : null}
        </>
    );



}

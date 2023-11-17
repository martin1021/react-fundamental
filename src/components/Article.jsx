import { GlobalContext } from "../context/";
import { useContext } from "react";


const ArticleStatus = ({isNew}) => {
        // isNew && <span>-- Baru!!!</span>;
    return isNew ? <span>-- Baru!!</span>: <span>-- Lama!!</span>;
}

// komponen harus Capital diawal
const NewArticle = () => {
    return <span>-- Baru!!</span>;
}



function Article (props) {

    const userName = useContext(GlobalContext);

    return (
        <>
        <div>
            <h3>{props.title}</h3>
            <small>
                Date:  {props.date}, tags: {props.tags.join(', ')}

                {/* cara conditional rendering 1 */}
                <ArticleStatus isNew={props.isNew} />

                {/* cara conditional rendering 2 */}
                {props.isNew && <NewArticle></NewArticle>}
                
            </small>
            <div>
                
                <small>Ditulis oleh {userName.nama}</small>
            </div>
        </div>
        </>
    )

}

export default Article;
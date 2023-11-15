const ArticleStatus = ({isNew}) => {
        // isNew && <span>-- Baru!!!</span>;
    return isNew ? <span>-- Baru!!</span>: <span>-- Lama!!</span>;
}

// komponen harus Capital diawal
const NewArticle = () => {
    return <span>-- Baru!!</span>;
}



function Article (props) {

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
        </div>
        </>
    )

}

export default Article;
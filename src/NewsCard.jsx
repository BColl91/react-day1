const NewsCard = (props) => {
    return (
        <div>
        <img src={props.newsImage} />
        <p><b>{props.newsHeadline}</b></p>
        <p><b>{props.newsStory}</b></p>
            </div>
    )
};

export default NewsCard;
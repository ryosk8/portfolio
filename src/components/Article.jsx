const Article =(props) => {
    return (
        <div>
          <h2>
              <h2>{props.title}</h2>
              <p>{ props.content}</p>
          </h2>
        </div>
    );
};

export default Article;
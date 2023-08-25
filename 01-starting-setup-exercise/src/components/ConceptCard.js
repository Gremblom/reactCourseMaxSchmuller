function ConceptCard(data){
    
    const {image, title, description} = data;

    return(
        <li className="concept">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    );
}

export default ConceptCard;
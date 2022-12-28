import './Banniere.scss';

export default function Banniere() {
    return (
        <section className="Banniere" style={{backgroundImage: "url(/image.jpg)"}}>
            {/* <img src="/image.jpg" alt="" className="fond"/> */}
            <article className="texte">
                <h1 className="titre">Bannière</h1>
                <p className="bloc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa neque distinctio itaque similique natus dolore praesentium dolorum sequi exercitationem. Quis, alias tenetur. Saepe excepturi aspernatur, veritatis repudiandae cumque adipisci?</p>
                <p className="bloc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur dolor corporis explicabo ratione mollitia, placeat eos veritatis nobis repellat similique voluptatibus doloremque ullam a. Animi inventore cum quia quis laborum.</p>
            </article>
        </section>
    )
}

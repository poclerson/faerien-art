import './Origine.scss';

import Banniere from './Banniere';

export default function Origine() {
    return (
        <section className="Origine">
            <Banniere titre="Origine" blocs={[
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum tenetur repudiandae voluptatem incidunt quae soluta illo iusto dolor exercitationem ad hic error corrupti consequatur, doloribus at cum quibusdam temporibus placeat.",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum tenetur repudiandae voluptatem incidunt quae soluta illo iusto dolor exercitationem ad hic error corrupti consequatur, doloribus at cum quibusdam temporibus placeat."
            ]}/>
        </section>
    )
}

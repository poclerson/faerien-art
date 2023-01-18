import './Contact.scss';

import Banniere from './Banniere';

export default function Contact({imgBanniere}) {
    return (
        <section className="Contact">
            <Banniere titre="Contact" image={imgBanniere} />
        </section>
    )
}

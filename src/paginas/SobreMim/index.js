import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Laura.
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            Olá, eu sou a Laura. Aos 28 anos, eu decidi fazer uma mudança em minha carreira. 
            </p>
            <p className={styles.paragrafo}>
            Embora eu não tivesse formação em programação, sempre tive um fascínio pela tecnologia e uma curiosidade inata sobre como os sites e aplicativos eram construídos. Eu sabia que essa transição de carreira não seria fácil, mas eu estava disposta a enfrentar todos os desafios que surgissem no meu caminho.
            </p>
            <p className={styles.paragrafo}>
            Decidi começar com o Front-end, pois a ideia de criar interfaces bonitas e funcionais para os usuários me encantava. Matriculei-me em um curso online e mergulhei de cabeça nos estudos. Aprendi os conceitos básicos do HTML, CSS e JavaScript e fiquei maravilhada com as possibilidades que essas linguagens ofereciam.
            </p>
            <p className={styles.paragrafo}>
            Os dias e noites se misturaram enquanto eu me dedicava incansavelmente ao aprendizado. Cada novo conhecimento adquirido me impulsionava ainda mais, alimentando minha motivação e paixão pelo desenvolvimento web. Eu colocava em prática o que aprendia, trabalhando em projetos pessoais e construindo um portfólio que refletisse meu progresso.
            </p>
            <p className={styles.paragrafo}>
            Claro, houve momentos de frustração e dúvida. Enfrentei problemas de codificação, erros inesperados e desafios técnicos. No entanto, cada obstáculo superado me tornava mais forte e confiante. Eu sabia que estava no caminho certo.

            </p>
            <p className={styles.paragrafo}>
            Conforme o tempo passava, comecei a me sentir mais confortável com as habilidades que adquiri. Comecei a enviar meu portfólio para empresas e a participar de entrevistas de emprego na área de Front-end. Algumas rejeições vieram pelo caminho, mas eu não desisti. Acreditava em meu potencial e sabia que encontraria a oportunidade certa. E hoje em dia, trabalho com o que sempre quis.
            </p>
        </PostModelo>
    )
}

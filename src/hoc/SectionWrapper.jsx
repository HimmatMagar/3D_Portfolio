import { motion } from "framer-motion"
import { styles } from "../style"
import { staggerContainer } from "../utils/motion"

const SectionWrapper = (Components, idName) => function HOC() {
    return(
        <motion.section
        varients={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
        className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}
        >
            <span className="hash-span" id={idName}></span>
            <Components />
        </motion.section>
    )
}

export default SectionWrapper

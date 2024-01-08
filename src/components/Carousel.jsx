import { motion } from "framer-motion"

function Carousel({ children, reverse = false }) {

    return (
        <div className="overflow-x-hidden px-screen my-5">
            <div className="overflow-x-hidden relative">
                <motion.div
                    style={{
                        display: "flex",
                        gap: "20px",
                        width: "max-content",
                        height: "330px",
                    }}
                    animate={{
                        x: reverse
                            ? ["calc(-50% - 10px)", "0"]
                            : ["0", "calc(-50% - 10px)"],
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {children}
                    {children}
                </motion.div>
            </div>
        </div>
    )
}

export default Carousel
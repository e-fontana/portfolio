import { PiCoffeeFill } from "react-icons/pi"
import { Subtitle } from "../text/subtitle"
import { Title } from "../text/title"

export const Contact = () => {
    return (
        <div id="contact" className="w-full h-64">
            <div className="flex items-center justify-center flex-col w-full h-full">
                <Title>Interested in working together?</Title>
                <Subtitle className="flex items-center justify-center text-zinc-400">
                    Let's talk! The coffee is on me! 
                    <PiCoffeeFill className="w-8 text-orange-500" />
                </Subtitle>
            </div>
        </div>
    )
}
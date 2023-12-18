import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

export const TypeWriterWelcome: FC = () => {
	const welcome: string[] = [
		"Welcome to EcoMovie - Enjoy the Show!",
		"Discover Movie Magic at EcoMovie",
		"Get Ready for Cinematic Bliss"
	];

	return (
		<>
			<Typewriter
				words={welcome}
				loop={true}
				cursor={true}
				cursorStyle="|"
				typeSpeed={80}
				deleteSpeed={10}
				delaySpeed={2700}
			/>
		</>
	);
};

import { FuzzyText} from "@/components"
const NotFoundPage = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center flex-col">
			<FuzzyText baseIntensity={0.2} hoverIntensity={0.8} enableHover>
				404
			</FuzzyText>
			<FuzzyText baseIntensity={0.2} hoverIntensity={0.3} enableHover fontSize={"clamp(1rem, 2vw, 3rem)"}>
				Page Not Found
			</FuzzyText>
		</div>
	)
}
export default NotFoundPage

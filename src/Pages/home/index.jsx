import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import AnimatedText from "react-animated-text-content";
import HomeLogo from "../../assets/home_logo.png";

const animatedText = (
	<AnimatedText
		type="chars"
		key={Math.random()}
		animation={{
			x: "200px",
			y: "-20px",
			scale: 1.1,
			ease: "ease-in-out",
		}}
		animationType="float"
		interval={0.06}
		duration={0.8}
		tag="p"
		className="animated-paragraph"
		includeWhiteSpaces
		threshold={0.1}
		style={{ fontWeight: 600 }}
		rootMargin="20%">
		Coming Soon!...
	</AnimatedText>
);

const Index = () => {
	const [text, setText] = useState({
		text: [animatedText],
	});
	useEffect(() => {
		setTimeout(() => {
			setText({
				text: [
					<AnimatedText
						type="chars"
						key={Math.random()}
						animation={{
							x: "200px",
							y: "-20px",
							scale: 1.1,
							ease: "ease-in-out",
						}}
						animationType="float"
						interval={0.06}
						duration={0.8}
						tag="p"
						className="animated-paragraph"
						includeWhiteSpaces
						threshold={0.1}
						style={{ fontWeight: 600 }}
						rootMargin="20%">
						Coming Soon!...
					</AnimatedText>,
				],
			});
		}, 3000);
		return () => clearTimeout();
	});
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				height: "100vh",
			}}>
			<div style={{ fontWeight: 600 }}>
				<Countdown date={new Date("10-1-2022")} renderer={renderer} />
			</div>
			<img src={HomeLogo} style={{ width: 400 }} alt="logo" />
			{text.text}
		</div>
	);
};

const renderer = ({ days, hours, minutes, seconds }) => {
	return (
		<p style={{ display: "flex" }}>
			{days > 0 && (
				<span
					style={{
						display: "flex",
						textAlign: "center",
						flexDirection: "column",
						margin: "0 10px",
					}}>
					<span>{days}</span>
					<span>{days > 1 ? "days" : "day"}</span>
				</span>
			)}
			<span
				style={{
					display: "flex",
					textAlign: "center",
					flexDirection: "column",
					margin: "0 10px",
				}}>
				<span>{hours < 10 ? `0${hours}` : hours} </span>
				<span>{hours > 1 ? "hours" : "hour"}</span>
			</span>
			<span
				style={{
					display: "flex",
					textAlign: "center",
					flexDirection: "column",
					margin: "0 10px",
				}}>
				<span>{minutes < 10 ? `0${minutes}` : minutes} </span>
				<span>{minutes > 1 ? "minutes" : "minute"}</span>
			</span>
			<span
				style={{
					display: "flex",
					textAlign: "center",
					flexDirection: "column",
					margin: "0 10px",
				}}>
				<span>{seconds < 10 ? `0${seconds}` : seconds} </span>
				<span>seconds</span>
			</span>
		</p>
	);
};

export default Index;

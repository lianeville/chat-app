import { Component } from "react"
import ChatSession from "./ChatSession"

class SessionBoard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sessions: [], // Initialize data as an empty array
		}
	}

	componentDidMount() {
		fetch("http://localhost:8000/")
			.then(response => {
				if (!response.ok) {
					throw new Error("Network response was not ok")
				}
				return response.json()
			})
			.then(sessions => {
				console.log("sessions", sessions)
				// Handle the data here (e.g., update the component state)
				this.setState({ sessions })
			})
			.catch(error => {
				console.error("Error fetching data:", error)
			})
	}

	render() {
		const { sessions } = this.state

		return (
			<div className="w-full absolute inset-0 flex flex-col">
				<div>
					{sessions.map((session, index) => (
						<ChatSession key={index} session={session} />
					))}
				</div>
			</div>
		)
	}
}

export default SessionBoard

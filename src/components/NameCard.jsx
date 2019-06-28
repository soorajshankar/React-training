import React, { Component } from "react";
import { Card } from "antd";
export class NameCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgUrl: null,
			isLoading: true
		};
	}
	componentDidMount = () => {
		const self = this;
		fetch("https://randomuser.me/api/")
			.then(e => e.json())
			.then(resp =>
				self.setState({
					isLoading: false,
					imgUrl: resp.results[0].picture.large
				})
			);
	};
	render() {
		const { name } = this.props;
		const { imgUrl, isLoading } = this.state;
		return (
			<Card title={name} bordered={false} style={{ margin: 15 }} loading={isLoading}>
				{isLoading ? ":Loading..." : <img src={imgUrl} alt={name} />}
			</Card>
		);
	}
}

export default NameCard;

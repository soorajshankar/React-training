import React, { Component } from "react";
import "./App.css";
import NameCard from "./components/NameCard";
import { Input, Button } from "antd";
import "antd/dist/antd.css";
import TableComp from "./components/TableComp";
import { Divider, Tag } from "antd";

const columns = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name"
	},
	{
		title: "Age",
		dataIndex: "age",
		key: "age"
	},
	{
		title: "Address",
		dataIndex: "address",
		key: "address"
	},
	{
		title: "Tags",
		key: "tags",
		dataIndex: "tags"
	},
	{
		title: "Action",
		key: "action"
	}
];

const data = [
	{
		key: "1",
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
		tags: ["nice", "developer"]
	},
	{
		key: "2",
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
		tags: ["loser"]
	},
	{
		key: "3",
		name: "Joe Black",
		age: 32,
		address: "Sidney No. 1 Lake Park",
		tags: ["cool", "teacher"]
	}
];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1,
			namelist: ["Avinash"],
			name: ""
		};
	}
	increment = () => {
		this.setState(({ count }) => {
			return { count: count + 1 };
		});
	};
	addToNamelist = () => {
		this.setState(({ namelist, name }) => {
			namelist.push(name);
			return { namelist, name: "" };
		});
	};
	onNameChange = e => {
		this.setState({ name: e.target.value });
	};
	onNameClick = item => {
		console.log(item);
	};
	onDelete = item => {
		console.log("item>>",item);
	};

	render() {
		const { count, namelist, name } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<TableComp
						columns={columns}
						data={data}
						onNameClick={this.onNameClick}
						onDelete={this.onDelete}
					/>
					<Input
						style={{ width: 500 }}
						value={name}
						onChange={this.onNameChange}
					/>
					<Button type="primary" disabled={!name} onClick={this.addToNamelist}>
						Add
					</Button>
					{/* <h1>{count}</h1> */}
					{/* <button onClick={this.increment}>+</button> */}
					<ol>
						{namelist.map(name => (
							<NameCard name={name} count={count} />
						))}
					</ol>
				</header>
			</div>
		);
	}
}
export default App;

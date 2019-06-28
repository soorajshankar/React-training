import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";
import { Button } from "antd/lib/radio";

const getColumns = (columns, onDelete,onNameClick) => {
	let newColumns = columns.map(i => {
		if (i.key === "name") {
			i.render = (text,params) => <a onClick={()=>onNameClick(params)} href="javascript:;">{text}</a>;
		}
		if (i.key === "tags") {
			i.render = tags => (
				<span>
					{tags.map(tag => {
						let color = tag.length > 5 ? "geekblue" : "green";
						if (tag === "loser") {
							color = "volcano";
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</span>
			);
			// i.render = text => <a href="javascript:;">{text}</a>;
		}
		if (i.key === "action") {
			i.render = (text, record) => (
				<span>
					<a href="javascript:;">Invite {record.name}</a>
					<Divider type="vertical" />
					<a onClick={() => onDelete(record)} href="javascript:;">
						Delete
					</a>
				</span>
			);
		}
		return i;
	});
	console.log(newColumns);
	return newColumns;
};
export default class TableComp extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { columns, data, onDelete,onNameClick } = this.props;
		return (
			<div style={{ backgroundColor: "#FFF" }}>
				<Button onClick={() => this.props.onDelete("Bla")}>TestDele</Button>
				<Table columns={getColumns(columns, onDelete,onNameClick)} dataSource={data} />
			</div>
		);
	}
}

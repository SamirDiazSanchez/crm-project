import { useEffect, useState } from "react";

import { Layout } from "./layout/layout";
import {
	UpdateModal,
	CreateModal,
	DeleteButton
} from '../components/clients/clientComponents';

import { Row, Col, Table } from 'reactstrap';

import axios from 'axios';
import { useRouter } from "next/router";

import clientService from 'services/clientsService';
import authService from "services/authService";
import { useAuth } from "hooks/useAuth";

const Clients = () => {
	const [loading, setLoading] = useState(false);
	const [clients, setClients] = useState([]);
	const { userData, removeUser, setUser } = useAuth();

	const refresh = async () => {
		const response = await authService.auth(userData.token_refresh);
		if (response.status === 200) {
			setUser(response.data);
			return response;
		}
		else {
			removeUser();
		}
	}

	const getClients = async () => {
		const response = await clientService.get(userData.token);
		console.log(response.data);
		if (response.status !== 200) {
			refresh();
			return
		}

		setClients(response.data);
	}

	const createClient = async (client) => {
		let res;
		res = await clientService.create(userData.token, client);

		if (res.status === 201) {
			getClients();
		}
		else {
			const resRefresh = await refresh();
			res = await clientService.create(resRefresh.data.token, client);
			getClients();
		}

		return true;
	}

	const updateClient = async (client) => {
		let res;
		res = await clientService.update(userData.token, client);

		if (res.status === 200) {
			getClients();
		}
		else {
			const resRefresh = await refresh();
			res = await clientService.update(resRefresh.data.token, client);
			getClients();
		}

		return true;
	}

	const deleteClient = async (client) => {
		let res;
		res = await clientService.remove(userData.token, client);

		if (res.status === 200) {
			getClients();
		}
		else {
			const resRefresh = await refresh();
			res = await clientService.remove(resRefresh.data.token, client);
			getClients();
		}

		return true;
	}

	useEffect(() => {
		if (userData) getClients();
	}, [userData])

	useEffect(() => {
		
	}, [])

	return (
		<Layout title="Clients">
			<Row
				className="py-2 justify-content-end"
			>
				<Col
					md={2}
				>
					<CreateModal
						createClient={createClient}
					/>
				</Col>
			</Row>
			<Row
				className="pt-1"
			>
				<Col>
					<Table
						bordered
					>
						<thead>
							<tr className="table-active">
								<th>#</th>
								<th>Name</th>
								<th>Last name</th>
								<th>Email</th>
								<th>Phone</th>
								{
									(userData !== null && userData.user.rol === 'Super Admin') &&
									<th>State</th>
								}
								<th colSpan={2} style={{width: '10%'}}>Actions</th>
							</tr>
						</thead>
						<tbody>
							{
								clients.map((client, index) => {
									return (
										<tr
											key={index}
										>
											<td>{index+1}</td>
											<td>{client.name}</td>
											<td>{client.lastName}</td>
											<td>{client.email}</td>
											<td>{client.phone}</td>
											{
												(userData !== null && userData.user.rol === 'Super Admin') &&
												<td
													className={client.active ? 'table-success' : 'table-danger'}
												>
													{client.active ? 'Eneable' : 'Disable' }
												</td>
											}
											<td>
												<UpdateModal
													properties={client}
													udpateClient={updateClient}
												/>
											</td>
											<td>
												<DeleteButton
													deleteClient={deleteClient}
													clientId={client.id}
												/>
											</td>
										</tr>
									);
								})
							}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Layout>
	);
}

export default Clients;
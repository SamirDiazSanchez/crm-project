import { Layout } from "./layout/layout";
import {
	Button, Row, Col, Modal, ModalBody, ModalHeader, ModalFooter, Table, Input, Spinner
} from 'reactstrap';
import { useState } from "react";

const Users = () => {
	const [userModal, setUserModal] = useState(false);
	const [profileModal, setProfileModal] = useState(false);
	const [loading, setLoading] = useState(false);

	const toggleUserModal = () => {
		setUserModal(!userModal);
	}

	const toggleProfileModal = () => {
		setProfileModal(!profileModal);
	}

	const submitUser = e => {
		e.preventDefault();
		
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			toggleUserModal();
		}, 1000);

		console.log(e.target)
	}

	const submitProfile = e => {
		e.preventDefault();
		
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			toggleProfileModal();
		}, 1000);

		console.log(e.target)
	}

	return (
		<Layout>
			<Row
				className="py-2 justify-content-end"
			>
				<Col
					md={2}
				>
					<Button
						color="info"
						size="sm"
						block
						onClick={toggleUserModal}
					>
						Add User
					</Button>

					<Modal
						isOpen={userModal}
					>
						<ModalHeader
							toggle={toggleUserModal}
						>
							Add User
						</ModalHeader>

						<form onSubmit={submitUser}>
							<ModalBody>
								<Input
									name="name"
									bsSize="sm"
									placeholder="Name"
									className="mb-1"
									required
								/>

								<Input
									name="client"
									bsSize="sm"
									className="mb-1"
									type="select"
									required
								>
									<option value="1">option 1</option>
								</Input>

								<Input
									name="description"
									type="textarea"
									bsSize="sm"
									placeholder="Description"
									className="mb-1"
									rows={5}
									required
								/>
							</ModalBody>

							<ModalFooter>
								{
									loading ?
										<Spinner
											color="primary"
											type="grow"
										>
											Loading...
										</Spinner>
									:
									<>
										<Button
											color="success"
										>
											Save
										</Button>
										<Button
											type="reset"
											color="danger"
										>
											Reset
										</Button>
									</>
								}
							</ModalFooter>
						</form>
					</Modal>
				</Col>

				<Col
					md={2}
				>
					<Button
						color="primary"
						size="sm"
						block
						onClick={toggleUserModal}
					>
						Add Profile
					</Button>

					<Modal
						isOpen={profileModal}
					>
						<ModalHeader
							toggle={toggleProfileModal}
						>
							Add User
						</ModalHeader>

						<form onSubmit={submitProfile}>
							<ModalBody>
								<Input
									name="name"
									bsSize="sm"
									placeholder="Name"
									className="mb-1"
									required
								/>

								<Input
									name="client"
									bsSize="sm"
									className="mb-1"
									type="select"
									required
								>
									<option value="1">option 1</option>
								</Input>

								<Input
									name="description"
									type="textarea"
									bsSize="sm"
									placeholder="Description"
									className="mb-1"
									rows={5}
									required
								/>
							</ModalBody>

							<ModalFooter>
								{
									loading ?
										<Spinner
											color="primary"
											type="grow"
										>
											Loading...
										</Spinner>
									:
									<>
										<Button
											color="success"
										>
											Save
										</Button>
										<Button
											type="reset"
											color="danger"
										>
											Reset
										</Button>
									</>
								}
							</ModalFooter>
						</form>
					</Modal>
				</Col>
			</Row>
			<Row
				className="pt-1"
			>
				<Col
					md={4}
				>
					<Table
						bordered
					>
						<thead>
							<tr>
								<th>#</th>
								<th>Profile</th>
								<th>permissions</th>
								<th>Actions</th>
							</tr>
						</thead>
					</Table>
				</Col>

				<Col>
					<Table
						bordered
					>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Client</th>
								<th>Description</th>
								<th>Actions</th>
							</tr>
						</thead>
					</Table>
				</Col>
			</Row>
		</Layout>
	);
}

export default Users;
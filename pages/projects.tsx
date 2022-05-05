import { Layout } from "../components/layout/layout";
import {
	Button, Row, Col, Modal, ModalBody, ModalHeader, ModalFooter, Table, Input, Spinner
} from 'reactstrap';
import { useState } from "react";

const Projects = () => {
	const [modalState, setModalState] = useState(false);
	const [loading, setLoading] = useState(false);

	const toggleModal = () => {
		setModalState(!modalState);
	}

	const submit = e => {
		e.preventDefault();
		
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			toggleModal();
		}, 1000);

		console.log(e.target)
	}

	return (
		<Layout title="Projects">
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
						onClick={toggleModal}
					>
						Add Project
					</Button>

					<Modal
						isOpen={modalState}
					>
						<ModalHeader
							toggle={toggleModal}
						>
							Add Project
						</ModalHeader>

						<form onSubmit={submit}>
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

export default Projects;
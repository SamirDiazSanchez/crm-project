import { useState } from "react";
import {
	Button, Modal, ModalHeader, ModalBody, Input, ModalFooter, Spinner
} from "reactstrap";

export const UpdateModal = ({ properties, udpateClient }) => {
	const [modalState, setModalState] = useState(false);
	const [loading, setLoading] = useState(false);
	const [client, setclient] = useState(properties);

	const submit = async (e) => {
		e.preventDefault();

		setLoading(true);

		const response = await udpateClient(client);

		if (response) {
			setLoading(false);
			setModalState(false);
		}
	}

	const handleChange = e => {
		setclient({ ...client, [e.target.name]: e.target.value })
	}

	const toggleModal = () => {
		setModalState(!modalState);
	}

	return (
		<>
			<Button
				color="warning"
				size="sm"
				block
				onClick={toggleModal}
			>
				<span className="ion-edit"></span>
			</Button>

			<Modal
				isOpen={modalState}
			>
				<ModalHeader
					toggle={toggleModal}
				>
					Add Client
				</ModalHeader>

				<form onSubmit={submit}>
					<ModalBody>
						<Input
							defaultValue={client.id}
						/>
						<Input
							name="name"
							bsSize="sm"
							placeholder="Name"
							className="mb-1"
							value={client.name}
							onChange={handleChange}
							required
						/>

						<Input
							name="lastName"
							bsSize="sm"
							placeholder="Last name"
							className="mb-1"
							value={client.lastName}
							onChange={handleChange}
							required
						/>

						<Input
							name="email"
							type="email"
							bsSize="sm"
							placeholder="Email"
							className="mb-1"
							value={client.email}
							onChange={handleChange}
							required
						/>

						<Input
							name="phone"
							type="tel"
							bsSize="sm"
							placeholder="Phone"
							className="mb-1"
							value={client.phone}
							onChange={handleChange}
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
		</>
	);
}
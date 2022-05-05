import { useState } from "react";
import {
	Button, Modal, ModalHeader, ModalBody, Input, ModalFooter, Spinner
} from "reactstrap";

export const CreateModal = ({ createClient }) => {
	const [modalState, setModalState] = useState(false);
	const [loading, setLoading] = useState(false);

	const submit = async (e) => {
		e.preventDefault();

		setLoading(true);

		const client = {
			name: e.target['name'].value,
			lastName: e.target['lastName'].value,
			phone: e.target['phone'].value,
			email: e.target['email'].value
		};

		const response = await createClient(client);

		if (response) {
			setLoading(false);
			setModalState(false);
		}
	}

	const toggleModal = () => {
		setModalState(!modalState);
	}

	return(
		<>
			<Button
				color="info"
				size="sm"
				block
				onClick={toggleModal}
			>
				Add Client
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
							name="name"
							bsSize="sm"
							placeholder="Name"
							className="mb-1"
							required
						/>

						<Input
							name="lastName"
							bsSize="sm"
							placeholder="Last name"
							className="mb-1"
							required
						/>

						<Input
							name="email"
							type="email"
							bsSize="sm"
							placeholder="Email"
							className="mb-1"
							required
						/>

						<Input
							name="phone"
							type="tel"
							bsSize="sm"
							maxLength={10}
							pattern="[0-9]{7,10}"
							placeholder="Phone"
							className="mb-1"
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
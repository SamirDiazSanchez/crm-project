import { useState } from 'react';
import {
	Input, Button, Spinner
} from 'reactstrap';

export const DeleteButton = ({clientId, deleteClient}) => {
	const [loading, setLoading] = useState(false);

	const submit = async (e) => {
		e.preventDefault();

		setLoading(true);

		const client = {
			id: e.target['page_id'].value
		}

		const response = await deleteClient(client);

		if (response) {
			setLoading(false);
		}
	}
	
	return (
		<form onSubmit={submit}>
			<Input
				type="hidden"
				name="page_id"
				defaultValue={clientId}
			/>

			<Button
				block
				color="danger"
				size="sm"
			>
				{
					loading ?
					<Spinner
						size='sm'
					/>
					:
					<span className="ion-trash-a"></span>
				}
			</Button>
		</form>
	);
}
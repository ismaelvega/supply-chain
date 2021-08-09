import React from 'react'
import axios from 'axios'
import {wrapper, table, top} from './styles.module.css'

const ActivityTrackingDiagram2 = async () => {
	// const baseUrl = 'http://localhost:3001'
	// const activities = await axios.get(`${baseUrl}/activity-tracking`).then((response) => {
	// 	getSuppliers(response.data);
	// });
	// console.log('activities :>>', activities);
  return (
		<div >
			<table className={table}>
				<colgroup span="4"></colgroup>
				<tr className={top}>
					<th>No.</th>
					<th>Activity</th>
					<th>
						<img src="../assets/images/storage.png" alt="geometric shape" />
					</th>
					<th>
						<img src="../assets/images/operation.png" alt="geometric shape" />
					</th>
					<th>
						<img src="../assets/images/transportation.png" alt="geometric shape" />
					</th>
					<th>
						<img src="../assets/images/delay.png" alt="geometric shape" />
					</th>
					<th>
						<img src="../assets/images/inspection.png" alt="geometric shape" />
					</th>
					<th>
						<img src="../assets/images/combinedActivity.png" alt="geometric shape" />
					</th>
				</tr>
				<tr>
					<td>1</td>
					<td>
						Acitvity name
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td>
						Acitvity name
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
				</tr>
				<tr>
					<td>3</td>
					<td>
						Acitvity name
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
					<td>
						<input type="checkbox"></input>
					</td>
				</tr>
			</table>
		</div>
	);
};

export default ActivityTrackingDiagram2
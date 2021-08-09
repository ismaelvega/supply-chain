import React, { useEffect } from 'react'
import { useState } from 'react';
import Canvas from '../Canvas';
import {wrapper, node_canva, activity_name, table, top} from './styles.module.css'

const Any = () => {
	function initCanvas(){
		const rows = document.querySelectorAll('tr').length - 1
		const columns = 6
		const zeroX = 852
		const zeroY = 100
		const pointsX = [852, 926, 1000, 1073, 1147, 1220]
		const firstRow = [
			[pointsX[0], zeroY],
			[pointsX[1], zeroY],
			[pointsX[2], zeroY],
			[pointsX[3], zeroY],
			[pointsX[4], zeroY],
			[pointsX[5], zeroY]
		]
		const xGap = 73
		const yGap = 45
		const points = [firstRow];

		for(let i = 0; i < rows - 1; i++){
			points.push([
				[pointsX[0], zeroY + (yGap * (i+1))],
				[pointsX[1], zeroY + (yGap * (i+1))],
				[pointsX[2], zeroY + (yGap * (i+1))],
				[pointsX[3], zeroY + (yGap * (i+1))],
				[pointsX[4], zeroY + (yGap * (i+1))],
				[pointsX[5], zeroY + (yGap * (i+1))]
			])
		}
		return points
	}

	const [points, setPoints] = useState([])

	useEffect(() => {
		setPoints(initCanvas())
	}, [])
  return (
		<div >
			<table id="table" className={table}>
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
					<td className={activity_name}>
						Quiero que sean minimo 50 caracteres
					</td>
					<td>
						<Canvas classN={node_canva} points={points}/>
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
					<td>
						<input type="checkbox"></input>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td className={activity_name}>
						Quiero que sean minimo 50 caracteres o maaasssss
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
					<td>
						<input type="checkbox"></input>
					</td>
				</tr>
				<tr>
					<td>3</td>
					<td className={activity_name}>
						Quiero que sean minimo 50 caracteres
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
					<td>
						<input type="checkbox"></input>
					</td>
				</tr>
				<tr>
					<td>3</td>
					<td className={activity_name}>
						Quiero que sean minimo 50 caracteres
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
					<td>
						<input type="checkbox"></input>
					</td>
				</tr>
				<tr>
					<td>3</td>
					<td className={activity_name}>
						Quiero que sean minimo 50 caracteres
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
					<td>
						<input type="checkbox"></input>
					</td>
				</tr>
			</table>
		</div>
	);
};

export default Any
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
	const [name, setName] = useState('')
	const [age, setAge] = useState(0)
	const [country, setCountry] = useState('')
	const [position, setPosition] = useState('')
	const [wage, setWage] = useState(0)

	const [employeeList, setEmployeeList] = useState([])

	const addEmployee = () => {
		axios
			.post('http://localhost:3001/create', {
				name: name,
				age: age,
				country: country,
				position: position,
				wage: wage,
			})
			.then(() => {
				console.log('Success')
			})
	}

	useEffect(() => {
		axios.get('http://localhost:3001/employees').then((res) => {
			setEmployeeList(res.data)
		})
	}, [])

	return (
		<div className='App bg-slate-800 min-h-screen'>
			<div className='pt-12'>
				<div className='w-full max-w-xs mx-auto container rounded-md bg-slate-300'>
					<form className='rounded p-8 mb-4'>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='name'
							type='text'
							placeholder='Name'
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='age'
							type='number'
							placeholder='Age'
							onChange={(e) => setAge(e.target.value)}
						/>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='country'
							type='text'
							placeholder='Country'
							onChange={(e) => setCountry(e.target.value)}
						/>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='position'
							type='text'
							placeholder='Position'
							onChange={(e) => setPosition(e.target.value)}
						/>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 mb-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='wage'
							type='number'
							placeholder='Wage (annualy)'
							onChange={(e) => setWage(e.target.value)}
						/>
						<button
							className='bg-slate-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition ease-in-out duration-300'
							type='button'
							onClick={addEmployee}>
							Add Employee
						</button>
					</form>
				</div>
				<hr className='w-1/4 mx-auto my-12' />
				<div className='w-full max-w-xs mx-auto container'>
					{employeeList.map((val, key) => {
						return (
							<div className='bg-slate-300 mb-8 p-4 rounded-md' key={val.id}>
								<p className='py-1'>
									<strong>Name:</strong> {val.name}
								</p>
								<p className='py-1'>
									<strong>Age:</strong> {val.age}
								</p>
								<p className='py-1'>
									<strong>Country:</strong> {val.country}
								</p>
								<p className='py-1'>
									<strong>Position:</strong> {val.position}
								</p>
								<p className='py-1'>
									<strong>Wage:</strong> {val.wage}
								</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default App

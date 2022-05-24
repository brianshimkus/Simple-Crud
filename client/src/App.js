import { useState } from 'react'

function App() {
	const [name, setName] = useState('')
	const [age, setAge] = useState(0)
	const [country, setCountry] = useState('')
	const [position, setPosition] = useState('')
	const [wage, setWage] = useState(0)

	const displayInfo = () => {
		console.log(`Name: ${name}`)
		console.log(`Age: ${age}`)
		console.log(`Country: ${country}`)
		console.log(`Position: ${position}`)
		console.log(`Wage: ${wage}`)
	}

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
							onClick={displayInfo}>
							Add Employee
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default App
